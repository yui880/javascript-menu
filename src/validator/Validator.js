import { NAME } from '../constant/constant.js';
import ValidationError from './ValidationError.js';
import { ERROR } from '../constant/message.js';
import { ALL_MENU } from '../constant/menu.js';

const Validator = {
  checkIsValidLength(input) {
    if (input.length < NAME.minLen || input.length > NAME.maxLen) {
      throw new ValidationError(ERROR.invalidLength);
    }
  },

  checkIsValidCount(input, { min, max }) {
    if (input.length < min || input.length > max) {
      throw new ValidationError(ERROR.invalidCount(min, max));
    }
  },

  checkExistence(input) {
    if (!ALL_MENU.includes(input)) {
      throw new ValidationError(ERROR.noExist);
    }
  },
};

export default Validator;
