function getRandomNumber(
  { min, max }: { min: number, max: number },
): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

type RandomArray = number[];

export function randomArraySize10(): RandomArray {
  const result: RandomArray = [];

  for (let i: number = 0; i < 10; i++) {
    result.push(getRandomNumber({ min: 1, max: 10 }));
  }

  return result;
}

type IndicesList = number[];

export function getIndicesOfLargestValues(randomList: RandomArray): IndicesList {
  // NOTE I didn't know until today there's a Set<T> generic interface in TS, very cool https://github.com/microsoft/TypeScript/blob/master/lib/lib.es2015.collection.d.ts#L58
  const uniq: Set<number> = new Set(randomList);
  const uniqSortedList: number[] = Array.from(uniq).sort((first: number, second: number) => second - first);

  const result: IndicesList = [];

  let currLargestNumber: number = uniqSortedList[0];

  while (true) {
    if (result.length >= 5) {
      break;
    }

    let indexOfLargestNumInRandom: number = -1;

    while (true) {
      const NOT_FOUND: number = -1;
      const findResult: number = randomList.indexOf(currLargestNumber, indexOfLargestNumInRandom + 1);

      if (findResult !== NOT_FOUND) {
        result.push(findResult);

        indexOfLargestNumInRandom = findResult;
        continue;
      } else {
        const prevIndex: number = uniqSortedList.indexOf(currLargestNumber);
        currLargestNumber = uniqSortedList[prevIndex + 1];
        break;
      }
    }
  }

  return result;
}
