var parado, andando;
var comFaca;
var jogador;
var pistola,pistolaAtaque, pistolaRecarga, pistolaTiro, escopeta, escopetaAtaque, escopetaRecarga, escopetaTiro, rifle, rifleAtaque, rifleRecarga, rifleTiro;
var armaAtual = ["faca", "rifle"];
var arma = 0;

function preload(){
parado = loadAnimation("assets/feet/idle/survivor-idle_0.png");
andando = loadAnimation("assets/feet/walk/survivor-walk_0.png", "assets/feet/walk/survivor-walk_19.png");
comFaca = loadAnimation("assets/knife/idle/survivor-idle_knife_0.png", "assets/knife/idle/survivor-idle_knife_19.png");
//pistola
pistola = loadAnimation("assets/handgun/move/survivor-move_handgun_0.png", "assets/handgun/move/survivor-move_handgun_19.png" );
pistolaAtaque = loadAnimation("assets/handgun/meleeattack/survivor-meleeattack_handgun_0.png", "assets/handgun/meleeattack/survivor-meleeattack_handgun_14.png");
pistolaRecarga = loadAnimation("assets/handgun/reload/survivor-reload_handgun_0.png", "assets/handgun/reload/survivor-reload_handgun_14.png");
pistolaTiro = loadAnimation("assets/handgun/shoot/survivor-shoot_handgun_0.png", "assets/handgun/shoot/survivor-shoot_handgun_2.png");
//rifle
rifle = loadAnimation("assets/rifle/move/survivor-move_rifle_0.png", "assets/rifle/move/survivor-move_rifle_19.png");
rifleAtaque = loadAnimation("assets/rifle/meleeattack/survivor-meleeattack_rifle_0.png", "assets/rifle/meleeattack/survivor-meleeattack_rifle_14.png")
rifleRecarga = loadAnimation("assets/rifle/reload/survivor-reload_rifle_0.png", "assets/rifle/reload/survivor-reload_rifle_19.png");
rifleTiro = loadAnimation("assets/rifle/shoot/survivor-shoot_rifle_0.png", "assets/rifle/shoot/survivor-shoot_rifle_2.png")
//escopeta
escopeta = loadAnimation("assets/shotgun/move/survivor-move_shotgun_0.png", "assets/shotgun/move/survivor-move_shotgun_19.png");
escopetaAtaque = loadAnimation("assets/shotgun/meleeattack/survivor-meleeattack_shotgun_0.png", "assets/shotgun/meleeattack/survivor-meleeattack_shotgun_14.png");
escopetaTiro = loadAnimation("assets/shotgun/shoot/survivor-shoot_shotgun_0.png", "assets/shotgun/shoot/survivor-shoot_shotgun_2.png");
escopetaRecarga = loadAnimation("assets/shotgun/reload/survivor-reload_shotgun_0.png", "assets/shotgun/reload/survivor-reload_shotgun_19.png");



}
function setup() {
  createCanvas(windowWidth,windowHeight);
   jogador = new Jogador()
   jogador.display()
   
}

function draw() {
  background(255,255,255);  
  
  if(keyWentDown("e")){
    
    (arma<armaAtual.length-1)?arma+=1:arma=0;
    jogador.trocarArma(armaAtual[arma]);
  }
  
  jogador.acoes();
  drawSprites();
}