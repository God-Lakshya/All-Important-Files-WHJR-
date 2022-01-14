var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies; 

var base1 , block1,block2,block3,block4,block5,block6,polygon;

function setUp () {
    createCanvas(100,600);
   base1 = new Ground(200,200,10,10)
   block1 = new Box(100,200,20,20);
}

function draw () {
background("black");

base1.display();
block1.display();
drawSprites();
} 