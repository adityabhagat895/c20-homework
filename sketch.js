var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(car.x-wall.x<car.width/2+wall.width/2){
    deformation();
  }
}
function deformation(){
  deformation=0.5*weight*speed*speed/22500;
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  if(deformation>100&& deformation<180){
    car.shapeColor=color(230,230,0);
  }
  if(deformation>180){
    car.shapeColor=color(255,0,0);;
  }
}
