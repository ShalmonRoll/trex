var trex,trexCollided,trexRunning,ground,invisibleGround,groundImage,count;

function preload () {
trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png");
trexCollided=loadImage("trex_collided.png");
groundImage=loadAnimation("ground2.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  trex= createSprite(50,380,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5
  ground=createSprite(200,380,200,20);
  ground.addAnimation ("ground",groundImage);
  ground.x=ground.width/2;
  ground.velocityX=-5;
  invisibleGround=createSprite(200,390,400,10);
  invisibleGround.visible=false;
  count=0;
  
}

function draw() {
  background(220);
  // press space to jump
  
  if(keyDown("space") && trex.y>=360 ){
  
  trex.velocityY=-12;
    
  }
 // adding gravity
  trex.velocityY=trex.velocityY+0.8;
  
 // adjusting ground position
  
  if (ground.x<0){
  
    ground.x=ground.width/2;
  }
  
 // trex support
  trex.collide(invisibleGround);

spawnObstacles();  
drawSprites();  
}

                                                                                                           
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    
    obstacle.addAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}



