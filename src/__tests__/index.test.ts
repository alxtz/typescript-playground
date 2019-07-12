import { getIndicesOfLargestValues } from '../index';

test('[1,2,3,4,5,6,7,8,9,10] should return index of last 5', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const output = [9, 8, 7, 6, 5]

  expect(getIndicesOfLargestValues(input)).toEqual(output)
});

test('[1,1,1,1,1,1,1,1,1,1] should return index of all elements', () => {
  const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  const output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  expect(getIndicesOfLargestValues(input)).toEqual(output)
});

test('[1,1,2,2,3,3,4,4,5,5] should return [8,9,6,7,4,5]', () => {
  const input = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  const output = [8, 9, 6, 7, 4, 5]

  expect(getIndicesOfLargestValues(input)).toEqual(output)
});

test('[1,1,2,2,3,3,3,5,5,5] should return [7,8,9,4,5,6]', () => {
  const input = [1, 1, 2, 2, 3, 3, 3, 5, 5, 5]
  const output = [7, 8, 9, 4, 5, 6]

  expect(getIndicesOfLargestValues(input)).toEqual(output)
});

test('[1,1,2,2,5,5,5,5,5,5] should return [4,5,6,7,8,9]', () => {
  const input = [1, 1, 2, 2, 5, 5, 5, 5, 5, 5]
  const output = [4, 5, 6, 7, 8, 9]

  expect(getIndicesOfLargestValues(input)).toEqual(output)
});
