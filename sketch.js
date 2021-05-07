var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle
var count = 0; 
var divisions=[];
var plinkos = [];
var gameState='start'
var gameState='play'

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground1 = new Ground(0,400,10,800)
  ground2 = new Ground(810,400,10,800)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width; j=j+50){   
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 20; j <=width-10; j=j+50){    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50){    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 20; j <=width-10; j=j+50){    
       plinkos.push(new Plinko(j,375));
    }    
}
function draw() {
  background("black");
  textSize(30)
  text("Score : "+score,20,30);
  text("500",15,550);
  text("500",95,550);
  text("500",175,550);
  text("500",255,550);
  text("100",335,550);
  text("100",415,550);
  text("100",495,550);
  text("200",575,550);
  text("200",655,550);
  text("200",735,550);
  textSize(25)
  text("You Have 5 Chances",550,35)
  Engine.update(engine);
 
  ground.display();

if(gameState==='end'){
   textSize(80)
    text("Game Over",200,250)
} 
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  if(gameState!=='end'){
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<322){
        score=score+500;
        particle=null;
        count=count+1
      }}}
           if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<562){
        score=score+100;
        particle=null;
        count=count+1
      }}}
        if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<801){
        score=score+200;
        particle=null;
        count=count+1
      }}}
    }



   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   if(count>=5){
    gameState="end"
    }

}
function mousePressed(){
if(gameState!=='end'){
  particle=new Particle(mouseX,30,10,10);
}
}
