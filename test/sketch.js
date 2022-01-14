
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dummy , obstacle;

function setup() {
	createCanvas(1000, 500);

	dummy = createSprite(200,200,10,10)
	dummy.velocityX = 4; 
	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
background("blue")

if(dummy.x > 300){
	obstacle=createSprite(310,200,10,10);
	obstacle.velocityY=2;
}

  drawSprites();
 
}
