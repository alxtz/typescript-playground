function getRandomNumber(
  { min, max }: { min: number, max: number },
): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

type RandomArray = number[];

function randomArraySize10(): RandomArray {
  const result: RandomArray = [];

  for (let i: number = 0; i < 10; i++) {
    result.push(getRandomNumber({ min: 1, max: 10 }));
  }

  return result;
}

type IndicesList = number[];

function getIndicesOfLargestValues(randomList: RandomArray): IndicesList {
  const sortedList = [...randomList].sort((first, second) => {
    return second - first
  })

  const result: IndicesList = []

  let largestIndexInSorted = 0

  while(true) {
    if (largestIndexInSorted > 4) {
      break
    }

    const currentLargestNumber = sortedList[largestIndexInSorted]
    result.push(randomList.indexOf(currentLargestNumber))

    largestIndexInSorted += 1
  }

  return result
}


const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const expected = JSON.stringify([9, 8, 7, 6, 5])
const output = JSON.stringify(getIndicesOfLargestValues(input))

console.log('output', output)
console.log(output === expected)
