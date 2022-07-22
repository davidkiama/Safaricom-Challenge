function solution(A) {
  // 1. Filter the array to get into an array of one digit elements

  const oneDigitArr = A.filter((num) => String(num).length < 2);

  // 2. Get the max element in the array
  const maxNum = Math.max(...oneDigitArr);

  return maxNum;
}

const testArr = [-6, -91, 1011, -100, 84, -22, 0, 1, 9, 473];

solution(testArr);
