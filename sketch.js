const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var pushButton, upButton, rightButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
 ball = Bodies.circle(200,200,20);
 World.add(world,ball);

 ground = Bodies.rectangle(200,390,400,20,{isStatic:true});
 World.add(world,ground);

  pushButton = createImg("push.png")
  pushButton.position(50,75)
  pushButton.size(30,30)
  pushButton.mouseClicked(pushForce)

  upButton = createImg("up.png")
  upButton.position(200,75)
  upButton.size(30,30)
  upButton.mouseClicked(upForce)

  rightButton = createImg("right.png")
  rightButton.position(300,75)
  rightButton.size(30,30)
  rightButton.mouseClicked(rightForce)

}

function draw() 
{
  background(51);
  Engine.update(engine);

  push()
  fill("red")
  rect(ground.position.x, ground.position.y, 400, 20)
  pop()
  push()
  fill("blue")
  ellipse(ball.position.x, ball.position.y, 20, 20)
}
 function rightForce (){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})

 }
function upForce (){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})

}
function pushForce (){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.01})
}
 