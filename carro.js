let xCarros = [550,450,550,450,550,450,550,450,550,450,550,450];
let yCarros = [40,40,96,96,150,150,210,210,270,270,318,318];
let velocidade = [2,2,2.5,2.5,3.2,3.2,5,5,3.3,3.3,2.3,2.3];

let larguraCarro = 50;
let alturaCarro = 40;

function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarros(){
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidade[i];
    if(verificaChegouFinalTela(xCarros[i]))
      xCarros[i] = 550;
  }
}

function verificaChegouFinalTela(x){
  return x < -larguraCarro;
}