import { NAME } from './constant.js';

export const MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
  enterCoachName: '코치의 이름을 입력해 주세요. (, 로 구분)',
  enterInedibleList: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  result: '메뉴 추천 결과입니다.',
  finish: '추천을 완료했습니다.',
});

export const SEPARATOR = {
  list: ',',
  print: ' | ',
};

export const ERROR = Object.freeze({
  errorPrefix: '[ERROR]',
  invalidLength: `이름의 글자 수가 ${NAME.minLen} ~ ${NAME.maxLen} 사이가 아닙니다. 이름은 해당 글자수 이내만 가능합니다.`,
  invalidCount: (min, max) =>
    `개수가 ${min} ~ ${max} 사이가 아닙니다. 개수는 해당 수 이내만 입력할 수 있습니다.`,
  noExist: `메뉴에 존재하지 않는 음식입니다. 메뉴에 존재하는 음식만 입력할 수 있습니다.`,
});
