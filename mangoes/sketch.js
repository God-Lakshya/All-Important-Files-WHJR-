
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,stone;
var stoneImg,treeImg,mangoImg,boyImg;

function preload()
{
stoneImg = loadAnimation("stone.png");	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 ground = createSprite(400,650,800,10);
stone=new Stone (200,200,10,10)
stone= addImage(stoneImg)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  drawSprites();
 
}



