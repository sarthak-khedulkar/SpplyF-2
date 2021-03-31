var helicopterIMG, helicopterSprite,packageIMG;
var packageBody1,packageBody2,packageBody3,ground,packageSprite1,packageSprite2,packageSprite3,
var  wall1,wall2,base;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite1=createSprite(width/2, 80, 10,10);
	packageSprite1.addImage(packageIMG)
	packageSprite1.scale=0.2
	packageSprite2=createSprite(480, 80, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2
	packageSprite3=createSprite(330, 80, 10,10);
	packageSprite3.addImage(packageIMG)
	packageSprite3.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	base=createSprite(width/2,height-50,200,20);
	base.shapeColor=color("red");
	wall1=createSprite(510,610,20,100);
	wall1.shapeColor=color("red");
	wall2=createSprite(610,610,20,100);
	wall2.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody1 = Bodies.circle(width/2,200,5,{isStatic:true});
	World.add(world, packageBody);
	packageBody2 = Bodies.circle(width/2,200,5,{isStatic:true});
	World.add(world, packageBody);
	packageBody3 = Bodies.circle(width/2,200,5,{isStatic:true});
	World.add(world, packageBody);
	Engine.run(engine);
  
}

console.log(this_Sucked)
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y 
  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 
  packageSprite3.x= packageBody3.position.x 
  packageSprite3.y= packageBody3.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody1,false);
	Matter.Body.setStatic(packageBody2,false);
	Matter.Body.setStatic(packageBody3,false);
  }
}
