export const paginationFormatter = (
  page: number,
  totalPages: number,
  type: 'increase' | 'decrease',
  value: number = 1,
) => {
  const positiveValue = page + value > totalPages ? totalPages : page + value;
  const negativeValue = page - value < 0 ? 0 : page - value;
  return type === 'increase' ? positiveValue : negativeValue;
};
