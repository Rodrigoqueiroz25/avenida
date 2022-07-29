let xAtor = 80;
let yAtor = 366;
let colisao = false;
let pontos = 0;


function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -= 4;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor < 366){
      yAtor += 4;
    }
  }
}

function verificaColisaoAtorCarro(){
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      retornaIYnicial();
      somColisao.play();
      perdePonto();
    }
  }
}

function exibePontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(pontos, width /5, 28);
}

function marcaPonto(){
  if(yAtor < 10){
    pontos += 1;
    somPonto.play();
    retornaIYnicial();
  }
}

function perdePonto(){
  if(pontos > 0){
    pontos -= 1;
  }
}

function retornaIYnicial(){
  yAtor = 366;
}
