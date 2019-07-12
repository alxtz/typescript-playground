type MatrixRow = number[];
type Matrix = MatrixRow[];

function diagonalDifference(matrix: Matrix): number {
  let primaryDiagonalSum: number = 0;
  let secondaryDiagonalSum: number = 0;

  for (let i: number = 0; i < matrix.length; i++) {
    primaryDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const a: number = "str"

const exampleInput: Matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(exampleInput) === 15);
