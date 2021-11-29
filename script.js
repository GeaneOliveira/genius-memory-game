let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - Red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//cria a ordem aleatória das cores
let shuffleOrder = () => {
  let colorOrder= Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

//acende a próxima cor
let lightColor = (element, number) => {
  number = number * 250;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 100);
  setTimeout (() => {
    element.classList.remove('selected');
  });

}

//verifica se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//função que guarda o click do jogador
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  },100);
}
//funçao para retornar a cor
let createColorElement = (color) => {
  if(color == 0) {
    return green;
  }else if(color == 1) {
    return red;
  }else if(color == 2) {
    return yellow;
  }else if(color == 3) {
    return blue;
  }
}

//funçao próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// função game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\n Você perdeu o jogo!\nClique em ok e inicie o novo jogo.`);
  order = [];
  clickedOrder = [];

  playGame();
}
//funcão de início de jogo
let playGame = () => {
  alert('Bem vindo ao Genius! Iniciando novo jogo!');
  score = 0;

  nextLevel();
}
//eventos de click nas cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)



// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

playGame();




