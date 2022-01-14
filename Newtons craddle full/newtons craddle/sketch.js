const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 23;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

roof = new Ground(200,100,100,20);
    ball1= new Paper(200,190,20,20) ;
    ball2= new Paper(200,190,30,10) ;
    ball3= new Paper(240,200,20,20) ;
    ball4= new Paper(260,200,20,20) ;
    ball5= new Paper(280,200,20,20) ;
   rope1= new rope(ball1.body,roof.body,-bobDiameter*2,0)
   rope2 = new rope(ball2.body,roof.body,-bobDiameter*1,0) 
   rope3= new rope(ball3.body,roof.body,-bobDiameter*0,0)
   rope4 = new rope(ball4.body,roof.body,-bobDiameter*-1,0)
   rope5 = new rope(ball5.body,roof.body,-bobDiameter*-2,0) 
}

function draw(){
    background("pink");
    Engine.update(engine);
   roof.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   rope1.display();
   rope2.display(); 
   rope3.display();
   rope4.display();   
   rope5.display();
   

}
