const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,Tenball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var tenball_opt={
        restitution:1.0
    }
    Tenball=Bodies.circle(200,100,20,tenball_opt);
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    World.add(world,Tenball);

    console.log(ground);
    console.log(Tenball.position.x)
    console.log(Tenball.position.y)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(Tenball.position.x,Tenball.position.y,20);
   

}