import { INEDIBLE, NAME } from '../constant/constant.js';
import ValidationError from './ValidationError.js';
import { ERROR } from '../constant/message.js';
import { ALL_MENU } from '../constant/menu.js';

const Validator = {
  validateCoachNames(names) {
    this.checkValidLength(names);
    this.checkIsValidCount(names, { min: NAME.minCount, max: NAME.maxCount });
  },

  validateInedibleList(list) {
    this.checkIsValidCount(list, { min: INEDIBLE.minCount, max: INEDIBLE.maxCount });
    this.checkExistence(list);
  },

  checkValidLength(inputs) {
    inputs.forEach((input) => {
      if (input.length < NAME.minLen || input.length > NAME.maxLen) {
        throw new ValidationError(ERROR.invalidLength);
      }
    });
  },

  checkIsValidCount(inputs, { min, max }) {
    if (inputs.length < min || inputs.length > max) {
      throw new ValidationError(ERROR.invalidCount(min, max));
    }
  },

  checkExistence(inputs) {
    inputs.forEach((input) => {
      if (!['', ...ALL_MENU].includes(input)) {
        throw new ValidationError(ERROR.noExist);
      }
    });
  },
};

export default Validator;
