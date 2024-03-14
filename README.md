# Teste Técnico para Estágio na Target Sistemas

## Desafio 1

**1) Observe o trecho de código abaixo:**

```javascript
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
```

Ao final do processamento, qual será o valor da variável SOMA?
**Resposta: 91**
**Solução em Código: [clique aqui.](./assets/js/challenges/sum.js)**

## Desafio 2

**2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...).**

Escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

**IMPORTANTE:**

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

**Solução em Código: [clique aqui.](./assets/js/challenges/fibonacci.js)**

## Desafio 3

**3. Descubra a lógica e complete o próximo elemento:**

a) 1, 3, 5, 7, \_\_\_
**Resposta: 9. Explicação: Esta sequência está aumentando de 2 em 2 cada vez.**

b) 2, 4, 8, 16, 32, 64, \_\_\_\_
**Resposta: 128. Explicação: Esta sequência está dobrando a cada vez.**

c) 0, 1, 4, 9, 16, 25, 36, \_\_\_\_
**Resposta: 49. Explicação: Esta sequência são os quadrados dos números naturais começando do 0.**

d) 4, 16, 36, 64, \_\_\_\_
**Resposta: 100. Explicação: Esta sequência são os quadrados dos números pares começando do 2.**

e) 1, 1, 2, 3, 5, 8, \_\_\_\_
**Resposta: 13. Explicação: Esta sequência é conhecida como a sequência de Fibonacci.**

f) 2,10, 12, 16, 17, 18, 19, \_\_\_\_
**Resposta: 20. Explicação: Esta sequência começa adicionando 8, depois adiciona 2, adiciona 4, adiciona 1, adiciona 1 e adiciona 1.**

**Solução em Código: [clique aqui.](./assets/js/challenges/completeTheNextElement.js)**

## Desafio 4

**4. Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.**

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

**Resposta:**

1. Ligo o primeiro interruptor e deixo ligado por alguns minutos.
2. Desligo o primeiro interruptor e ligo o segundo interruptor.
3. Vou até a sala da primeira lâmpada.

- **Se a lâmpada estiver desligada e quente, ela pertence ao primeiro interruptor, pois ele tinha sido ativado há alguns minutos e depois desativado.**

- **Se a lâmpada estiver ligada, ela pertence ao segundo interruptor, pois deixei ele ativado.**

- **Se a lâmpada estiver desligada e fria, ela pertence ao terceiro interruptor, pois não ativei ele.**

Ou seja, na primeira ida a uma sala aleatória, eu teria descoberto a qual interruptor a lâmpada está conectada. Suponhamos que a lâmpada estava ligada. Nesse caso, ela pertence ao segundo interruptor. Após isso, eu iria na sala seguinte e conferiria se a lâmpada está quente ou fria. Se está quente e desligada, ela pertence ao primeiro interruptor e a terceira lâmpada pertence ao terceiro interruptor, pois é o que restou. Caso a segunda lâmpada estivesse fria, a resposta seria ao contrário.

**Observação: Essa solução assume que as lâmpadas aquecem quando estão acesas por alguns minutos, o que é verdade para muitos tipos de lâmpadas, como as incandescentes. Se as lâmpadas não aquecerem (como algumas lâmpadas LED), essa solução não funcionará.**

**Solução em Código: [clique aqui.](./assets/js/challenges/detectTheLamps.js)**

## Desafio 5

**5. Escreva um programa que inverta os caracteres de um string.**

**IMPORTANTE:**

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

**Solução em Código: [clique aqui.](./assets/js/challenges/invertWord.js)**
