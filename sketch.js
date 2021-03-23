const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,ground,boy,stone,slingshot;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function setup() {
	createCanvas(1500,600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(700,590,1500,25);
	tree = new Tree(1150,335);
	boy = new Boy(200,525);
	stone = new Stone(190,275,50);
	slingshot = new SlingShot(stone.body,{x:130,y:450});
	mango1 = new Mango(535,65,40);
	mango2 = new Mango(600,65,40);
	mango3 = new Mango(500,125,40);
	mango4 = new Mango(575,125,40);
	mango5 = new Mango(650,125,40);
	mango6 = new Mango(537.5,140,40);
	mango7 = new Mango(612.5,140,40);
	mango8 = new Mango(687.5,140,40);
	mango9 = new Mango(535,100,40);
	mango10 = new Mango(575,90,40);
	mango11 = new Mango(612.5,100,40);
	mango12 = new Mango(650,90,40);
}

function draw() {
  	background("Cyan");
	textSize(30);
	fill("Red");
	text("Press SpaceBar to take turn again ",500,50);
	ground.display();
	tree.display();
	boy.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }

function mouseReleased() {
    slingshot.fly();
  }

function detectCollision(stone,mango){
	mbp = mango.body.position;
	sbp = stone.body.position;

	var distance = dist(sbp.x,sbp.y,mbp.x,mbp.y)
	if (distance<=mango.radius+stone.radius) {
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x : 235,y : 420});
		slingshot.attach(stone.body);
	}
}