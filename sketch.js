
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone;
var mango;
var tree;
var ground;
var girl;
var rope;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	stone=new Stone(95,520,20);
	mango=new Mango(500,400,20);
  tree=new Tree(30,40);
  ground=new Ground(800,100);
  girl= new Girl(30,50);
  rope=new Rope(stone.body,{x:95, y:520})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  tree.display();
  ground.display();
  girl.display();
  stone.display();
  rope.display();
   mango.display();
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}





