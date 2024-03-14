export function getResultFromSumChallenge() {
  const index = 13;
  let sum = 0;
  let K = 0;

  while (K < index) {
    K++;

    sum += K;
  }

  return sum;
}
