import { CATEGORY_RANGE } from '../constant/menu.js';

import { WEEK } from '../constant/constant.js';
import RandomDataGenerator from '../utils/RandomDataGenerator.js';

class MenuRecommender {
  #coachList;

  #categoryList;

  constructor(coachList) {
    this.#coachList = coachList;
    this.#categoryList = [];
  }

  recommendMenu() {
    this.#selectCategory();

    this.#coachList.forEach((coach) => {
      this.#categoryList.forEach((category) => {
        coach.selectRecommendedMenu(category);
      });
    });
  }

  #selectCategory() {
    while (true) {
      const selectedCategory = RandomDataGenerator.generateCategory();

      if (this.#countSameCategory(selectedCategory) < CATEGORY_RANGE.duplicateLimit) {
        this.#categoryList.push(selectedCategory);
      }
      if (this.#categoryList.length === Object.keys(WEEK).length) break;
    }
  }

  #countSameCategory(newCategory) {
    return this.#categoryList.filter((category) => category === newCategory).length;
  }

  getCategoryList() {
    return [...this.#categoryList];
  }

  getTotalRecommendedList() {
    return Array.from(this.#coachList, (coach) => {
      return { name: coach.getName(), recommendation: coach.getRecommendedMenuList() };
    });
  }
}

export default MenuRecommender;
