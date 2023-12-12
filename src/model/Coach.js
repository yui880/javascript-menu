import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constant/menu';

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
    const edibleFoodList = this.#getEdibleFoodList(MENU[category]);
    const recommendFood = this.#getRecommendedFood(edibleFoodList);

    this.#recommendedFoodList.push(recommendFood);
  }

  #getEdibleFoodList(menuList) {
    return menuList.filter(
      (menu) => !this.#inedibleFoodList.includes(menu) && !this.#recommendedFoodList.includes(menu),
    );
  }

  #getRecommendedFood(foodList) {
    return Random.shuffle(foodList)[0];
  }
}

export default Coach;
