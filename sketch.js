var fixed, moving

function setup() {
  createCanvas(1200,800);
  fixed=createSprite(600, 400, 50, 80);
  fixed.shapeColor="blue";
  moving=createSprite(400,200,80,30);
  moving.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x - fixed.x < fixed.width/2+moving.width/2 
    && fixed.x - moving.x < fixed.width/2+moving.width/2 
    && moving.y-fixed.y< fixed.height/2+moving.height/2
    && fixed.y-moving.y< fixed.height/2+moving.height/2) {
    moving.shapeColor="yellow";
    fixed.shapeColor="yellow";
  }
  else{
    fixed.shapeColor="blue";
    moving.shapeColor="blue";
  }
  drawSprites();
}