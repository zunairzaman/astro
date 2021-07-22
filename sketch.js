var bg, sleep, brush, gym, eat, drink, move, bath;
var background, astronaut;


function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimaton("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  background = createSprite(20,20);
  background.addImage(bg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  createEdgeSprites();
}

function draw() {
  background(255,255,255);  

astronaut.collide(edges);
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bating",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityX = 4;
  astronaut.velocityY = 4;

  drawSprites();
}
}