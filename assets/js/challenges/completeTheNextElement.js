export function completeTheNextElementChallenge() {
  // a) This sequence is increasing by 2 each time.
  const addTwoEachTime = () => {
    let numbers = [1, 3, 5, 7];
    numbers.push(numbers[numbers.length - 1] + 2);
    return numbers; // Result: [1, 3, 5, 7, 9]
  };

  // b) This sequence is doubling each time.
  const doubleEachTime = () => {
    let numbers = [2, 4, 8, 16, 32, 64];
    numbers.push(numbers[numbers.length - 1] * 2);
    return numbers; // Result: [2, 4, 8, 16, 32, 64, 128]
  };

  // c) This sequence is the squares of natural numbers starting from 0.
  const squareNaturalNumbersStartingFromZero = () => {
    let numbers = [0, 1, 4, 9, 16, 25, 36];
    numbers.push(Math.pow(numbers.length, 2));
    return numbers; // Result: [0, 1, 4, 9, 16, 25, 36, 49]
  };

  // d) This sequence is the squares of even numbers starting from 2.
  const squareEvenNumbersStartingFromTwo = () => {
    let numbers = [4, 16, 36, 64];
    numbers.push(Math.pow(numbers.length * 2, 2));
    return numbers; // Result: [4, 16, 36, 64, 100]
  };

  // e) This sequence is known as the Fibonacci sequence.
  const getFibonacciSequenceWithNextNumber = () => {
    let numbers = [1, 1, 2, 3, 5, 8];
    numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
    return numbers; // Result: [1, 1, 2, 3, 5, 8, 13]
  };

  // f) This sequence starts with adding 8, then adds 2, adds 4, adds 1, adds 1, and adds 1.
  const getNextNumberFromSequence = () => {
    let numbers = [2, 10, 12, 16, 17, 18, 19];
    numbers.push(numbers[numbers.length - 1] + 1);
    return numbers; // Result: [2, 10, 12, 16, 17, 18, 19, 20]
  };

  const results = {
    a: addTwoEachTime(),
    b: doubleEachTime(),
    c: squareNaturalNumbersStartingFromZero(),
    d: squareEvenNumbersStartingFromTwo(),
    e: getFibonacciSequenceWithNextNumber(),
    f: getNextNumberFromSequence(),
  };

  return results;
}
