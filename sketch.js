
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperObject



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
  
  paperObject = new Paper(50,400,30,30) 
  line1 = new Dustbin(400,400,20,40)
  line2 = new Dustbin(200,100,40,20)
  line3 = new Dustbin(500,100,50,50)
  ground1 = new Ground(300,200,400,400)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paperObject.display()
 line1.display()
 line2.display()
 line3.display()
 ground1.display()
 
  drawSprites();
 
}



function keyPressed() {
	if(keycode === UP_ARROW ) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}

 