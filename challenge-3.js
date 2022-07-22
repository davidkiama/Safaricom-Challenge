function solution(A, B, X, Y) {
  let icons = {};

  A.forEach((cord, idx) => {
    icons[idx] = cord;
  });

  B.forEach((cord, idx) => {
    icons[idx] = `${icons[idx]}, ${cord}`.split(",");
  });

  let output = "";
  for (const [key, value] of Object.entries(icons)) {
    if (
      Number(value[0]) + 20 >= X &&
      Number(value[0]) - 20 <= X &&
      Number(value[1]) + 20 >= Y &&
      Number(value[1]) - 20 <= Y
    ) {
      output = Number(key);
      return output;
    } else {
      output = -1;
    }
  }

  return output;
}

const A = [100, 200, 100];
const B = [50, 100, 100];
const X = 100;
const Y = 100;

console.log(solution(A, B, X, Y));
