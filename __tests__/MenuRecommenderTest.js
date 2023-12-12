import Coach from '../src/model/Coach.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import MenuRecommender from '../src/model/MenuRecommender.js';
import menuRecommender from '../src/model/MenuRecommender.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('MenuRecommender 클래스 테스트', () => {
  describe('카테고리 선택 기능 테스트', () => {
    let menuRecommender;

    beforeEach(() => {
      const coachList = [new Coach('11', ['']), new Coach('22', [''])];
      menuRecommender = new MenuRecommender(coachList);
    });

    test.each([
      {
        randoms: [1, 2, 3, 4, 5],
        expected: ['일식', '한식', '중식', '아시안', '양식'],
      },
      {
        randoms: [2, 2, 1, 1, 3],
        expected: ['한식', '한식', '일식', '일식', '중식'],
      },
    ])('월-금 동안에 추천할 카테고리 5개를 선택한다.', ({ randoms, expected }) => {
      // given
      mockRandoms(randoms);

      // when
      menuRecommender.recommendMenu();
      const result = menuRecommender.getCategoryList();

      // then
      expect(result).toStrictEqual(expected);
    });

    test.each([
      {
        randoms: [1, 2, 2, 2, 3, 4],
        expected: ['일식', '한식', '한식', '중식', '아시안'],
      },
      {
        randoms: [2, 2, 2, 2, 1, 3, 4],
        expected: ['한식', '한식', '일식', '중식', '아시안'],
      },
    ])('중복되는 카테고리가 2번 초과 선택되면 다시 선택한다.', ({ randoms, expected }) => {
      // given
      mockRandoms(randoms);

      // when
      menuRecommender.recommendMenu();
      const result = menuRecommender.getCategoryList();

      // then
      expect(result).toStrictEqual(expected);
    });
  });
});
