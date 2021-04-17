const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box2;
var engine, world;
var box1;
var ground
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(200,380,400,10)
    box1 = new Box(100,100,50,50);
    box2=new Box(120,50,50,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
box2.display();
}