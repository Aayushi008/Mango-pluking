
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree 
var stone
var ground
var launcher
var mango1,mango2,mango3,mango4,mango5
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	
	tree=new tree(1050,580);
	ground=new ground(width/2,600,width,20);
	launcher=new launcher(stoneObj.body,{x:235,y:420})
  
	
	Engine.run(engine);
 
}

function draw() {

  background(230);
 
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
 
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  stone.display();
tree.display
  groundObject.display();
  launcherObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

function mouseReleased()
{
	launcherObject.fly();
   
}



  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {

  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



