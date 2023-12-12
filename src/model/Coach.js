class Coach {
  #name;

  #inedibleFoodList;

  #recommendedFoodList;

  constructor(name, foodList) {
    this.#name = name;
    this.#inedibleFoodList = foodList;
  }

  getEdibleFoodList(menuList) {
    return menuList.filter(
      (menu) => !this.#inedibleFoodList.includes(menu) && !this.#recommendedFoodList.includes(menu),
    );
  }
}

export default Coach;
