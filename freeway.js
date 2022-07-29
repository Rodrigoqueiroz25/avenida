function setup() {
  createCanvas(500, 400);
  //somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  verificaColisaoAtorCarro();
  exibePontos();
  marcaPonto();
}


