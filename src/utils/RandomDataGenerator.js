import { Random } from '@woowacourse/mission-utils';
import { CATEGORY, CATEGORY_RANGE } from '../constant/menu.js';

const RandomDataGenerator = {
  generateCategory() {
    const categoryIndex = this.generateCategoryRandomNumber() - 1;

    return Object.values(CATEGORY)[categoryIndex];
  },

  generateMenu(menuList) {
    const numberList = menuList.map((_, index) => index + 1);
    const shuffledNumber = Random.shuffle(numberList)[0] - 1;

    return menuList[shuffledNumber];
  },

  generateCategoryRandomNumber() {
    return Random.pickNumberInRange(CATEGORY_RANGE.min, CATEGORY_RANGE.max);
  },
};

export default RandomDataGenerator;
