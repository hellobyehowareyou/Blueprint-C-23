const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;

var box,box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    console.log(ground);

    box=new Box(200,200,50,50);
    box1=new Box(220,50,50,50);

    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box1.display();
    ground.display();
}

