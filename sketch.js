
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,dustbin4,dustbin5;

function preload()
{
	 
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperball = new paper(20,680,70);
	
	dustbin1 = new dustbin(1400,530);
	
	

	ground = new Ground(600,690,2000,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paperball.display();
  dustbin1.display();
 
  ground.display();

  
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:200,y:-185});

}
}

