import { capitalizeFirstLetter } from './helper';

describe('Capitalize First Letter  test', () => {
  test('base case', () => {
    expect(capitalizeFirstLetter('evgeny')).toBe('Evgeny');
  });
  test('First letter already capitalized', () => {
    expect(capitalizeFirstLetter('Evgeny')).toBe('Evgeny');
  });
});
