import InputView from '../view/InputView.js';
import { SEPARATOR } from '../constant/message.js';

class MenuController {
  async play() {
    const coachNameList = this.#getCoachNames();
  }

  async #getCoachNames() {
    const coachNames = await InputView.readCoachNames();
    const splitCoachNames = this.#splitToArray(coachNames);

    return splitCoachNames;
  }

  #splitToArray(list) {
    return list.split(SEPARATOR).map((item) => item.trim());
  }
}

export default MenuController;
