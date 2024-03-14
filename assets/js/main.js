import * as challengeMethods from "./index.js";

const CHECK_IF_NUMBER_IS_IN_FIBONACCI_SEQUENCE_BUTTON = document.getElementById(
  "checkIfNumberIsInFibonacciSequenceButton"
);

const INVERT_STRING_BUTTON = document.getElementById("invertStringButton");

function handleFibonacciSequenceButtonClick() {
  const fibonacciNumber = parseInt(
    document.getElementById("fibonacciInputNumber").value
  );

  const PARAGRAPH_FOR_FIBONACCI_NUMBER = document.getElementById(
    "fibonacci-challenge-answer"
  );

  if (!fibonacciNumber && fibonacciNumber !== 0) {
    PARAGRAPH_FOR_FIBONACCI_NUMBER.innerHTML =
      "A resposta aparecerá aqui assim que você preencher o campo acima.";

    return;
  }

  document.getElementById("fibonacciInputNumber").value = "";

  if (challengeMethods.isNumberInTheFibonacciSequence(fibonacciNumber)) {
    PARAGRAPH_FOR_FIBONACCI_NUMBER.innerHTML = `O número ${fibonacciNumber} está incluso na Sequência de Fibonacci.`;
  } else {
    PARAGRAPH_FOR_FIBONACCI_NUMBER.innerHTML = `O número ${fibonacciNumber} não está incluso na Sequência de Fibonacci.`;
  }
}

function handleInvertStringButtonClick() {
  const stringToBeInverted =
    document.getElementById("stringToBeInverted").value;

  const PARAGRAPH_FOR_INVERTED_STRING = document.getElementById(
    "invert-string-challenge-answer"
  );

  if (!stringToBeInverted) {
    PARAGRAPH_FOR_INVERTED_STRING.innerHTML =
      "A resposta aparecerá aqui assim que você preencher o campo acima.";

    return;
  }

  const invertedString = challengeMethods.invertString(stringToBeInverted);

  document.getElementById("stringToBeInverted").value = "";

  PARAGRAPH_FOR_INVERTED_STRING.innerHTML = `A string "${stringToBeInverted}" invertida é: "${invertedString}".`;
}

CHECK_IF_NUMBER_IS_IN_FIBONACCI_SEQUENCE_BUTTON.addEventListener(
  "click",
  handleFibonacciSequenceButtonClick
);

INVERT_STRING_BUTTON.addEventListener("click", handleInvertStringButtonClick);

const results = {
  challenge1: challengeMethods.getResultFromSumChallenge(),
  challenge2: challengeMethods.isNumberInTheFibonacciSequence(8),
  challenge3: challengeMethods.completeTheNextElementChallenge(),
  challenge4: challengeMethods.detectLampsAndTheirSwitchConnections(),
  challenge5: challengeMethods.invertString("bro"),
};

// Developed by Guilherme Rocha => https://github.com/guilhermescr/teste-tecnico-estagio-target-sistemas
