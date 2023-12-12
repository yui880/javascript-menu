import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constant/menu.js';

class Coach {
  #name;

  #inedibleFoodList;

  #recommendedFoodList;

  constructor(name, foodList) {
    this.#name = name;
    this.#inedibleFoodList = foodList;
    this.#recommendedFoodList = [];
  }

  selectRecommendedFood(category) {
    while (true) {
      const edibleFoodList = this.#getEdibleFoodList(MENU[category]);
      const recommendFood = this.#getRecommendedFood(MENU[category]);

      if (edibleFoodList.includes(recommendFood)) {
        this.#recommendedFoodList.push(recommendFood);
        break;
      }
    }
  }

  #getEdibleFoodList(menuList) {
    return menuList.filter(
      (menu) => !this.#inedibleFoodList.includes(menu) && !this.#recommendedFoodList.includes(menu),
    );
  }

  #getRecommendedFood(foodList) {
    const numberList = foodList.map((_, index) => index);
    const shuffledNumber = Random.shuffle(numberList)[0] - 1;

    return foodList[shuffledNumber];
  }

  getName() {
    return this.#name;
  }

  getRecommendedFoodList() {
    return [...this.#recommendedFoodList];
  }
}

export default Coach;
