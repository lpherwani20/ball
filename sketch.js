var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
drawSprites()
if (keyIsDown(RIGHT_ARROW)) {
  ball.x+=3
  
}
if (keyIsDown(LEFT_ARROW)) {
  ball.X-=3
  
}
if (keyIsDown(UP_ARROW)) {
ball.y-=3
}
}




