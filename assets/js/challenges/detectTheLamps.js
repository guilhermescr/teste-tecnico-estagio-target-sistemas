export function detectLampsAndTheirSwitchConnections() {
  // Inicialmente, todos os interruptores estão desligados
  let switches = [false, false, false];

  // Lâmpadas com propriedades de ligada/desligada e temperatura "quente" verdadeira/falsa
  let lamps = [
    { on: false, hot: false },
    { on: false, hot: false },
    { on: false, hot: false },
  ];

  // Ligue o primeiro interruptor e deixe a lâmpada esquentar
  switches[0] = true;
  lamps[0].on = true;
  lamps[0].hot = true;

  // Agora desligue o primeiro interruptor e ligue o segundo
  switches[0] = false;
  switches[1] = true;
  lamps[0].on = false;
  lamps[1].on = true;

  // Agora podemos verificar as lâmpadas
  lamps.forEach((lamp) => {
    if (lamp.on) {
      console.log("Lâmpada acesa pertence ao Interruptor 2.");
    } else if (lamp.hot) {
      console.log("Lâmpada apagada e quente pertence ao Interruptor 1.");
    } else {
      console.log("Lâmpada apagada e fria pertence ao Interruptor 3.");
    }
  });
}
