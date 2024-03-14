export function isNumberInTheFibonacciSequence(num) {
  let a = 0;
  let b = 1;

  while (b < num) {
    let temporaryValue = b;
    b = a + b;
    a = temporaryValue;
  }

  return b === num;
}
