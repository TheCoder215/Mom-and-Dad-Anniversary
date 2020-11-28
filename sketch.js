var back, backImg;
var balloon1, balloon2, balloon3, balloon4, balloon5, balloon6
var i1, i2, i3, i4

function preload(){
  i1 = loadImage("red.png");
  i2 = loadImage("green.png");
  i3 = loadImage("blue.png");
  i4 = loadImage("yellow.png");
  backImg = loadImage("HA.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   balloon1 = createSprite(335,390,10,10);
   balloon2 = createSprite(410,390,10,10);
   balloon3 = createSprite(485,390,10,10);
   balloon4 = createSprite(1030,390,10,10);
   balloon5 = createSprite(966,390,10,10);
   balloon6 = createSprite(880,390,10,10);   
  
  var abc = round(random(1,2))
  
  back = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  back.addImage(backImg);
  back.depth = balloon1.depth
  back.depth = back.depth -10

  switch(abc){
      
      
     case 1: 
        balloon1.addImage(i3);
        balloon2.addImage(i3);
        balloon3.addImage(i3);
        balloon4.addImage(i3);
        balloon5.addImage(i3);
        balloon6.addImage(i3);
        balloon1.scale=0.6;
      balloon2.scale=0.6;
      balloon3.scale=0.6;
      balloon4.scale = 0.6;
      balloon5.scale = 0.6;
      balloon6.scale = 0.6;
        break;
        
     case 2: 
        balloon1.addImage(i4);
        balloon2.addImage(i4);
        balloon3.addImage(i4);
        balloon4.addImage(i4);
        balloon5.addImage(i4);
        balloon6.addImage(i4);
        balloon1.scale=0.7;
      balloon2.scale=0.7;
      balloon3.scale=0.7;
      balloon4.scale = 0.7;
      balloon5.scale = 0.7;
      balloon6.scale = 0.7;
        break;
              
        default: break;  
  }
  
}

function draw() {
  background("white");

  balloon1.velocityY = -5
  balloon2.velocityY = -4
  balloon3.velocityY = -4
  balloon4.velocityY = -3
  balloon5.velocityY = -4
  balloon6.velocityY = -5

  balloon1.lifetime = 150
  balloon2.lifetime = 150
  balloon3.lifetime = 150;
  balloon4.lifetime = 150
  balloon5.lifetime = 150
  balloon6.lifetime = 150;
  

  drawSprites();
}

