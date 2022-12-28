import { paginationFormatter } from './helper';

describe('Pagination formatter test', () => {
  test('increase value, base case', () => {
    expect(paginationFormatter(10, 12, 'increase')).toBe(11);
  });
  test('decrease value, base case', () => {
    expect(paginationFormatter(10, 12, 'decrease')).toBe(9);
  });
  test('increase value, edge case - max', () => {
    expect(paginationFormatter(12, 12, 'increase')).toBe(12);
  });
  test('decrease value, edge case - min', () => {
    expect(paginationFormatter(0, 12, 'decrease')).toBe(0);
  });
});
