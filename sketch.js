var garden,rabbit; 
var gardenImg,rabbitImg;
var Apple,AppleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("Apple.png");
}

function setup(){
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    rabbit.x=rabbit.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    rabbit.x=rabbit.x+5
  }
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApple();
    } else if (select_sprites == 2) {
      createApple();
    }else {
      createApple();
    }
  }

}

  

//function to creatApple
function createApple(){
   // write your code here 
   Apple=createSprite(random(50,350),40,10,10);
   Apple.addImage(AppleImg)
   Apple.scale=1
   Apple.velocityY=5;
   Apple.lifetime = 150
}


