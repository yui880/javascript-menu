import { Console } from '@woowacourse/mission-utils';
import { TITLE, WEEK } from '../constant/constant.js';
import { MESSAGE, SEPARATOR } from '../constant/message.js';

const OutputView = {
  printStartMessage() {
    Console.print(`${MESSAGE.start}\n`);
  },

  printFinishMessage() {
    Console.print(`${MESSAGE.finish}\n`);
  },

  printResult({ categoryList, recommendations }) {
    Console.print(`\n${MESSAGE.result}`);
    this.printWeek();
    this.printCategory(categoryList);
    this.printRecommendation(recommendations);
  },

  printWeek() {
    const week = [TITLE.week, ...Object.values(WEEK)];
    Console.print(`[ ${week.join(SEPARATOR.print)} ]`);
  },

  printCategory(categoryList) {
    const category = [TITLE.category, ...categoryList];
    Console.print(`[ ${category.join(SEPARATOR.print)} ]`);
  },

  printRecommendation(recommendationList) {
    recommendationList.forEach(({ name, recommendation }) => {
      const list = [name, ...recommendation];
      Console.print(`[ ${list.join(SEPARATOR.print)} ]`);
    });
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;
