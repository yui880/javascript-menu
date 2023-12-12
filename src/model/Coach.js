import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constant/menu.js';

class Coach {
  #name;

  #inedibleMenuList;

  #recommendedMenuList;

  constructor(name, menuList) {
    this.#name = name;
    this.#inedibleMenuList = menuList;
    this.#recommendedMenuList = [];
  }

  selectRecommendedMenu(category) {
    while (true) {
      const edibleFoodList = this.#getEdibleMenuList(MENU[category]);
      const recommendFood = this.#getRandomMenu(MENU[category]);

      if (edibleFoodList.includes(recommendFood)) {
        this.#recommendedMenuList.push(recommendFood);
        break;
      }
    }
  }

  #getEdibleMenuList(menuList) {
    return menuList.filter(
      (menu) => !this.#inedibleMenuList.includes(menu) && !this.#recommendedMenuList.includes(menu),
    );
  }

  #getRandomMenu(menuList) {
    const numberList = menuList.map((_, index) => index + 1);
    const shuffledNumber = Random.shuffle(numberList)[0] - 1;

    return menuList[shuffledNumber];
  }

  getName() {
    return this.#name;
  }

  getRecommendedMenuList() {
    return [...this.#recommendedMenuList];
  }
}

export default Coach;
