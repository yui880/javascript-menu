import InputView from '../view/InputView.js';
import { SEPARATOR } from '../constant/message.js';
import Coach from '../model/Coach.js';

class MenuController {
  #coachList;

  constructor() {
    this.#coachList = [];
  }

  async play() {
    const coachNameList = this.#getCoachNames();
    coachNameList.forEach((coachName) => this.makeCoach(coachName));
  }

  async makeCoach(coachName) {
    const inedibleList = this.#getInedibleList(coachName);
    this.#coachList.push(new Coach(coachName, inedibleList));
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
    return list.split(SEPARATOR).map((item) => item.trim());
  }
}

export default MenuController;
