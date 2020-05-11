var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300,690,600,20);
  for (var j = 50; j < 600; j=j+100) {
    for (var i = 50; i < 600 + 1; i=i+100) {
     plinkos.push(new Plinko(i,j));
    }
  }
  for(var k = 100;k<600;k=k+100){
    divisions.push(new Divisions(k,600,10,120));
  }
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   particles.push(new Particle(random(0, 600), 10));
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < particles.length; k++) {
     divisions[k].display();
   }
}