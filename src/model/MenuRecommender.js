import { Random } from '@woowacourse/mission-utils';
import { CATEGORY, CATEGORY_RANGE } from '../constant/menu.js';

class MenuRecommender {
  #coachList;

  #categoryList;

  constructor(coachList) {
    this.#coachList = coachList;
    this.#categoryList = [];
  }

  recommendMenu() {
    const category = this.selectCategory();

    this.#coachList.forEach((coach) => {
      coach.selectRecommendedFood(category);
    });
  }

  selectCategory() {
    while (true) {
      const categoryIndex = this.#generateCategoryRandomNumber() - 1;
      const selectedCategory = Object.values(CATEGORY)[categoryIndex];

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

  getTotalRecommendedList() {
    return Array.from(this.#coachList, (coach) => {
      const coachName = coach.getName();

      return { name: coachName, recommendation: coach.getRecommendedFoodList() };
    });
  }
}

export default MenuRecommender;
