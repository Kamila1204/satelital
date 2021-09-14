var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;
var downLinkLeft, downLinkLeftImg;
var upLinkRight, upLinkRightImg;
var downLinkRight, downLinkRightImg;
var space;
var spaceImg;

function preload(){
  //Cargar animaciones de los links izquierdos
  upLinkLeftImg = loadAnimation("leftu/upleft1.png", "leftu/upleft2.png", "leftu/upleft3.png", "leftu/upleft4.png", "leftu/upleft5.png", "leftu/upleft6.png", "leftu/upleft7.png", "leftu/upleft8.png");
  downLinkLeftImg = loadAnimation("leftd/dleft1.png", "leftd/dleft2.png", "leftd/dleft3.png", "leftd/dleft4.png", "leftd/dleft5.png", "leftd/dleft6.png", "leftd/dleft7.png", "leftd/dleft8.png", "leftd/dleft9.png");
  //animaciones links derechos
  upLinkRightImg = loadAnimation("rightu/upright1.png", "rightu/upright2.png", "rightu/upright3.png", "rightu/upright4.png", "rightu/upright5.png", "rightu/upright6.png", "rightu/upright7.png", "rightu/upright8.png");
  downLinkRightImg = loadAnimation("rightd/dright1.png", "rightd/dright2.png", "rightd/dright3.png", "rightd/dright4.png", "rightd/dright5.png", "rightd/dright6.png", "rightd/dright7.png", "rightd/dright8.png");
  satelitteImg = loadImage("satellite.png");
  earthImg = loadAnimation("other/earth1.png", "other/earth2.png", "other/earth3.png", "other/earth4.png", "other/earth5.png");
  groundStationLeftImg = loadImage("other/gstation1.png");
  groundStationRightImg = loadImage("other/gstation2.png");
  spaceImg = loadAnimation("other/spacebg.png", "other/spacebg.png");
  
}

function setup(){
  createCanvas(700,500);
  //earth 
  earth=createSprite(350, 820, 50, 50);
  earth.addAnimation("earth", earthImg);
  earth.scale=0.6;
  //satelite
  satelitte = createSprite(350, 70, 50, 50);
  satelitte.addImage(satelitteImg);
  satelitte.scale = 0.7;
  //estacion derecha
  groundStationRight = createSprite(600, 390, 50, 50);  
  groundStationRight.addImage(groundStationRightImg);
  groundStationRight.scale = 0.07;
  //estacion izquierda
  groundStationLeft = createSprite(100, 390, 50, 50);  
  groundStationLeft.addImage(groundStationLeftImg);
  groundStationLeft.scale = 0.07;
  
  //links up
  upLinkRight = createSprite(470, 235, 50, 50);
  upLinkRight.addAnimation("linking", upLinkRightImg);
  upLinkRight.scale = 0.05;
  
  upLinkLeft = createSprite(240, 235, 50, 50);
  upLinkLeft.addAnimation("linking", upLinkLeftImg);
  upLinkLeft.scale = 0.05;
  
  //links down
  downLinkRight = createSprite(470, 235, 50, 50);
  downLinkRight.addAnimation("linking", downLinkRightImg);
  downLinkRight.scale = 0.05;
  
  downLinkLeft = createSprite(240, 235, 50, 50);
  downLinkLeft.addAnimation("linking", downLinkLeftImg);
  downLinkLeft.scale = 0.05;
  
 
}

function draw(){
  background("black");
  
  //instrucciones
  textSize(13);
  text('Presiona las teclas L & R', 15, 30);
  text('Presiona las teclas de flecha Izquierda y Derecha', 15, 60);
  textSize(10);
  text('-Para solicitar datos del satelite', 15, 45);
  text('-Para recibir datos del satelite', 15, 75);
  
  //links invisible
  downLinkRight.visible = false;
  downLinkLeft.visible = false;
  upLinkLeft.visible = false;
  upLinkRight.visible = false;
  
  if(keyDown("L")){
       upLinkRight.visible = true;
     }
  if(keyDown("R")){
       upLinkLeft.visible = true;
     }
  
  if(keyDown("LEFT_ARROW")){
       downLinkLeft.visible = true;
     }
  if(keyDown("RIGHT_ARROW")){
       downLinkRight.visible = true;
     }
  
  drawSprites();
  //instrucciones
  fill("pink");
  textSize(13);
  text('Presiona las teclas L & R', 15, 30);
  text('Presiona las teclas de flecha Izquierda y Derecha', 15, 60);
  textSize(10);
  text('-Para solicitar datos del satelite', 15, 45);
  text('-Para recibir datos del satelite', 15, 75);
  
  //texto links
  textSize(15);
  fill("lightblue");
  if(keyDown("R")){
       text("Solicitando datos del satelite", 10, 300);
     }
  if(keyDown("L")){
       text("Solicitando datos del satelite", 300, 300);
     }
  if(keyDown("LEFT_ARROW")){
       text("Transfiriendo datos a la estacion base Izquierda", 10, 300);
     }
  if(keyDown("RIGHT_ARROW")){
       text("Transfiriendo datos a la estacion base Derecha", 385, 300);
     }
  
  
}