import { Random } from '@woowacourse/mission-utils';
import { CATEGORY_RANGE } from '../constant/menu';

class MenuRecommender {
  #coachList;

  #categoryList;

  constructor(coachList) {
    this.#coachList = coachList;
    this.#categoryList = [];
  }

  recommendMenu() {
    const selectedCategory = this.#selectCategory();
  }

  #selectCategory() {
    return Random.pickNumberInRange(CATEGORY_RANGE.min, CATEGORY_RANGE.max);
  }
}

export default MenuRecommender;
