import { Random } from '@woowacourse/mission-utils';
import { CATEGORY_RANGE } from '../constant/menu';

class MenuRecommender {
  #coachList;

  #categoryList;

  constructor(coachList) {
    this.#coachList = coachList;
    this.#categoryList = [];
  }

  selectCategory() {
    while (true) {
      const selectedCategory = this.#generateCategoryRandomNumber();
      if (this.#countSameCategory(selectedCategory) <= CATEGORY_RANGE.duplicateLimit) {
        this.#categoryList.push(selectedCategory);

        return selectedCategory;
      }
    }
  }

  #generateCategoryRandomNumber() {
    return Random.pickNumberInRange(CATEGORY_RANGE.min, CATEGORY_RANGE.max);
  }

  #countSameCategory(newCategory) {
    return this.#categoryList.filter((category) => category === newCategory).length;
  }
}

export default MenuRecommender;
