import { MENU } from '../constant/menu.js';
import RandomDataGenerator from '../utils/RandomDataGenerator.js';

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
      const recommendFood = RandomDataGenerator.generateMenu(MENU[category]);

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

  getName() {
    return this.#name;
  }

  getRecommendedMenuList() {
    return [...this.#recommendedMenuList];
  }
}

export default Coach;
