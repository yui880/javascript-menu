import { MissionUtils } from '@woowacourse/mission-utils';
import Coach from '../src/model/Coach.js';

const mockShuffles = (rows) => {
  MissionUtils.Random.shuffle = jest.fn();

  rows.reduce((acc, [firstNumber, numbers]) => {
    return acc.mockReturnValueOnce([
      firstNumber,
      ...numbers.filter((number) => number !== firstNumber),
    ]);
  }, MissionUtils.Random.shuffle);
};

describe('Coach 클래스 테스트', () => {
  const sequenced = (_, idx) => idx + 1;
  const coachInstance = new Coach('yuna', ['오니기리', '김밥']);

  describe('기능 테스트', () => {
    test.each([
      {
        category: '양식',
        shuffles: [[1, Array.from({ length: 9 }, sequenced)]],
        expected: '라자냐',
      },
      {
        category: '중식',
        shuffles: [[5, Array.from({ length: 9 }, sequenced)]],
        expected: '짬뽕',
      },
    ])(
      '카테고리를 입력받아서 먹을 수 있는 메뉴 중 추천 메뉴를 선택하고 저장한다.',
      ({ category, shuffles, expected }) => {
        // given
        mockShuffles(shuffles);

        // when
        const coach = new Coach('yuna', ['']);
        coach.selectRecommendedFood(category);

        // then
        const result = coach.getRecommendedFoodList()[0];
        expect(result).toBe(expected);
      },
    );

    test('추천 메뉴로 중복된 메뉴가 나오면 다시 메뉴를 선택한다.', () => {
      // given
      const category = '양식';
      mockShuffles([
        [1, Array.from({ length: 9 }, sequenced)],
        [1, Array.from({ length: 9 }, sequenced)],
        [2, Array.from({ length: 9 }, sequenced)],
      ]);

      // when
      coachInstance.selectRecommendedFood(category);
      coachInstance.selectRecommendedFood(category);
      const result = coachInstance.getRecommendedFoodList();

      // then
      const expected = ['라자냐', '그라탱'];
      expect(result).toStrictEqual(expected);
    });

    test.each([
      {
        category: '일식',
        inedible: ['오니기리'],
        shuffles: [
          [6, Array.from({ length: 9 }, sequenced)],
          [1, Array.from({ length: 9 }, sequenced)],
        ],
        expected: ['규동'],
      },
      {
        category: '아시안',
        inedible: ['쌀국수'],
        shuffles: [
          [5, Array.from({ length: 9 }, sequenced)],
          [5, Array.from({ length: 9 }, sequenced)],
          [9, Array.from({ length: 9 }, sequenced)],
        ],
        expected: ['분짜'],
      },
    ])(
      '추천 메뉴로 먹을 수 없는 메뉴가 나오면 다시 메뉴를 선택한다.',
      ({ category, inedible, shuffles, expected }) => {
        // given
        mockShuffles(shuffles);

        // when
        const coach = new Coach('yuna', inedible);
        coach.selectRecommendedFood(category);
        const result = coach.getRecommendedFoodList();

        // then
        expect(result).toStrictEqual(expected);
      },
    );
  });
});
