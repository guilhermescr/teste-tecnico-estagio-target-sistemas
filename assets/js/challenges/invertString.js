export function invertString(string) {
  const stringCharacters = string.split("");
  const invertedStringCharacters = [];

  for (let index = stringCharacters.length; index > 0; index--) {
    // fill invertedWordLetters array with letters from the original word, but gather the letters starting from the end until it reaches the first letter.
    invertedStringCharacters.push(stringCharacters[index - 1]);
  }

  const invertedString = invertedStringCharacters.join("");

  return invertedString;
}
