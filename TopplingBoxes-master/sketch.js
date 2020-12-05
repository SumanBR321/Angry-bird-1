const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1,log2,box3,box4,pig2,box5,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,320,50,50);
    box2 = new Box(800,320,50,50);
    ground = new Ground(600,height,1200,20)
    box3 = new Box(1000,250,50,50);
    box4 = new Box(800,250,50,50);
    pig1 = new Pig(900,320);
    pig2 = new Pig(900,250);
    log1 = new Log(900,300,250,PI/2)
    log2 = new Log(900,200,250,PI/2);
    box5 = new Box(900,180,50,50);
    log3 = new Log(890,150,120,PI/7);
    log4 = new Log(920,150,120,-PI/7);
    bird1 = new Bird(200,200,50,50) ;
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log3.display();
    bird1.display();
}