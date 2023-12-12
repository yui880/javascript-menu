import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';

const InputView = {
  async readCoachNames() {
    return await Console.readLineAsync(`${MESSAGE.enterCoachName}\n`);
  },

  async readInedibleList(coachName) {
    return await Console.readLineAsync(`\n${MESSAGE.enterInedibleList(coachName)}\n`);
  },
};

export default InputView;
