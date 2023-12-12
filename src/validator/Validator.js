import { NAME } from '../constant/constant.js';
import ValidationError from './ValidationError.js';
import { ERROR } from '../constant/message.js';

const Validator = {
  checkIsValidLength(input) {
    if (input.length < NAME.minLen || input.length > NAME.maxLen) {
      throw new ValidationError(ERROR.invalidLength);
    }
  },
};

export default Validator;
