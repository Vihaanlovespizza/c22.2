const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var circle;



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var circle_options ={
        restitution: 2
    }
    circle = Bodies.circle(140,30,10,circle_options);
    World.add(world,circle);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY);
    ellipseMode(RADIUS);
ellipse(circle.position.x,circle.position.y,10,10);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    
}