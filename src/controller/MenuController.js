import InputView from '../view/InputView.js';
import { SEPARATOR } from '../constant/message.js';
import Coach from '../model/Coach.js';
import MenuRecommender from '../model/MenuRecommender.js';
import OutputView from '../view/OutputView.js';

class MenuController {
  #coachList;

  #menuRecommender;

  constructor() {
    this.#coachList = [];
  }

  async play() {
    OutputView.printStartMessage();
    const coachNameList = await this.#getCoachNames();
    await this.#makeCoach(coachNameList);

    this.#processMenuRecommendation();
    OutputView.printResult({
      categoryList: this.#menuRecommender.getCategoryList(),
      recommendations: this.#menuRecommender.getTotalRecommendedList(),
    });
    OutputView.printFinishMessage();
  }

  #processMenuRecommendation() {
    this.#menuRecommender = new MenuRecommender(this.#coachList);
    this.#menuRecommender.recommendMenu();
  }

  async #makeCoach(coachNameList) {
    for (const index in coachNameList) {
      const inedibleList = await this.#getInedibleList(coachNameList[index]);
      this.#coachList.push(new Coach(coachNameList[index], inedibleList));
    }
  }

  async #getCoachNames() {
    const coachNames = await InputView.readCoachNames();
    const splitCoachNames = this.#splitToArray(coachNames);

    return splitCoachNames;
  }

  async #getInedibleList(coachName) {
    const inedibleList = await InputView.readInedibleList(coachName);
    const splitInedibleList = this.#splitToArray(inedibleList);

    return splitInedibleList;
  }

  #splitToArray(list) {
    return list.split(SEPARATOR.list).map((item) => item.trim());
  }
}

export default MenuController;
