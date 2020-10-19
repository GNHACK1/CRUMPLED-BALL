
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper
var bin2, bin3, bin1
var green

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1500,20)
  paper = new Paper(200,450,50)

  green = new Greenbin(815,540,10,50)

  bin1 = new Dustbin(815,650,140,20)
  bin2 = new Dustbin(754,620,20,110)
  bin3 = new Dustbin(846,620,20,110)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();

  green.display();

  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-150});
  }
}




