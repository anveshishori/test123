const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var backgroundImg

function preload() {

 backgroundImg = loadImage("./assets/background.gif")
towerImg = loadImage("./assets/tower.png")

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create()
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,100,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,345,150,300,options)
 World.add(world,tower)
 
}

function draw() {
  
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,100);

  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,150,300)
   pop()
}
