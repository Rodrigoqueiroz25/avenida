let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros = [];

let somTrilha;
let somColisao;
let somPonto;

let carro1;
let carro2;
let carro3;

function preload(){
    imagemDaEstrada = loadImage("./material/estrada.png");
    imagemDoAtor = loadImage("./material/ator-1.png");
    carro1 = loadImage("./material/carro-1.png");
    carro2 = loadImage("./material/carro-2.png");
    carro3 = loadImage("./material/carro-3.png");
    imagemCarros = [carro1,carro2,carro3,carro3,carro2,carro1,carro1,carro2,carro3,carro3,carro2,carro1];
    somTrilha = loadSound("material/sons/trilha.mp3");
    somPonto = loadSound("material/sons/pontos.wav");
    somColisao = loadSound("material/sons/colidiu.mp3");
}