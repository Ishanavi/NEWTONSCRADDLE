
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(500,100,280,20)
	
	bob1 = new Bob(410,400,40)
	bob2 = new Bob(450,400,40)
	bob3 = new Bob(490,400,40)
	bob4 = new Bob(530,400,40)
	bob5 = new Bob(570,400,40)

	chain1 = new Chain(bob1.body,roof.body,-90,0)
	chain2 = new Chain(bob2.body,roof.body,-50,0)
	chain3 = new Chain(bob3.body,roof.body,-8,0)
	chain4 = new Chain(bob4.body,roof.body,33,0)
	chain5 = new Chain(bob5.body,roof.body,75,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(165,255,255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1,y:-10})
    }
}

