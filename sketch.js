var bubble;
var spikesGroup;

function setup() {
  createCanvas(displayWidth/2,displayHeight-30);
  
  bubble = createSprite(400, 600, 50, 50);
  bubble.shapeColor = "white";
  
 spikesGroup = createGroup();
}

function draw() {
  background("lightblue");  

if(keyIsDown(UP_ARROW)){
    bubble.velocityY = -3;
  }
  if(keyIsDown(DOWN_ARROW)){
    bubble.velocityY = +3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    bubble.velocityX = +3;
  }
  if(keyIsDown(LEFT_ARROW)){
    bubble.velocityX = -3;
  }
  if(bubble.isTouching(spikesGroup)){
    fill("black")
    textSize(64)
    text("GAME OVER",300,100);
    bubble.destroy();
    spikesGroup.destroy();
  }
   camera.position.x = bubble.x ;
   camera.position.y =  bubble.y;
  Spikes();
  drawSprites();
}

function Spikes(){
if(frameCount%50===0){
  var spike = createSprite(250,10,50,50)
     spike.shapeColor = "black";
     
     spike.y = Math.round(random(0,400));
     spike.velocityX = 1.5;
    
     spike.lifetime = 450;
     spikesGroup.add(spike);
     
   }
}