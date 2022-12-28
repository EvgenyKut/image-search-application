import { greetingFormatting } from './helper';

describe('Greeting formatter test', () => {
  test('base case (morning)', () => {
    expect(greetingFormatting('Johnny', 9)).toBe('Good morning, Johnny!');
  });
  test('Greeting without name', () => {
    expect(greetingFormatting(undefined, 9)).toBe('Good morning!');
  });
  test('base case (afternoon)', () => {
    expect(greetingFormatting('Johnny', 12)).toBe('Good afternoon, Johnny!');
  });
  test('base case (evening)', () => {
    expect(greetingFormatting('Johnny', 18)).toBe('Good evening, Johnny!');
  });
  test('base case (night)', () => {
    expect(greetingFormatting('Johnny', 23)).toBe('Good night, Johnny!');
  });
  test('base case (deep night)', () => {
    expect(greetingFormatting('Johnny', 4)).toBe('Good night, Johnny!');
  });
});
