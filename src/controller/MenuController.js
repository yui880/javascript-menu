import InputView from '../view/InputView.js';
import { SEPARATOR } from '../constant/message.js';

class MenuController {
  #coachList;

  async play() {
    const coachNameList = this.#getCoachNames();
  }

  async makeCoach(coachName) {
    const inedibleList = this.#getInedibleList(coachName);
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
