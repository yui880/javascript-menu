import InputView from '../view/InputView.js';
import { SEPARATOR } from '../constant/message.js';
import Coach from '../model/Coach.js';
import MenuRecommender from '../model/MenuRecommender.js';
import OutputView from '../view/OutputView.js';
import Validator from '../validator/Validator.js';

class MenuController {
  #coachList;

  #menuRecommender;

  constructor() {
    this.#coachList = [];
  }

  async play() {
    OutputView.printStartMessage();
    const coachNameList = await this.#handleException(() => this.#getCoachNames());
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
    for (const coachName of coachNameList) {
      const inedibleList = await this.#handleException(() => this.#getInedibleList(coachName));
      this.#coachList.push(new Coach(coachName, inedibleList));
    }
  }

  async #handleException(callback) {
    while (true) {
      try {
        return await callback();
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  async #getCoachNames() {
    const coachNames = await InputView.readCoachNames();
    const splitCoachNames = this.#splitToArray(coachNames);
    Validator.validateCoachNames(splitCoachNames);

    return splitCoachNames;
  }

  async #getInedibleList(coachName) {
    const inedibleList = await InputView.readInedibleList(coachName);
    const splitInedibleList = this.#splitToArray(inedibleList);
    Validator.validateInedibleList(splitInedibleList);

    return splitInedibleList;
  }

  #splitToArray(list) {
    return list.split(SEPARATOR.list).map((item) => item.trim());
  }
}

export default MenuController;
