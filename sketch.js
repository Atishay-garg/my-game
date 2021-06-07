var pathImg,path,boy,boyImg,television,tvImg,edges;

function preload() {
  pathImg=loadImage("path.jpg")
  tvImg=loadImage("tv2.png")
  boyImg=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png")
  footBallImg=loadImage("football.webp")
  }

function setup() {
  createCanvas(700,400);
  path= createSprite(440, 200);
path.addImage(pathImg)
path.scale=1.6
path.velocityX=-3
boy=createSprite(50,300,50,100)
boy.addAnimation("boyRunning",boyImg)
boy.scale=0.5
edges=createEdgeSprites();

}


function draw() {
  background(0);  
if(path.x<200){
path.x=path.width/2
}
if(keyDown("UP_ARROW")){
boy.velocityY=-10


}
boy.velocityY=boy.velocityY+0.5
boy.collide(edges[3])
spawnTV();
spawnFootBall();
  drawSprites();
}
function spawnTV(){
if(frameCount%100===0){
  television=createSprite(700,random(10,380),20,20)
television.velocityX=-3
television.addImage(tvImg)
television.scale=0.1
}

}
function spawnFootBall(){
  footBall=createSprite(700,random(10,380),20,20)
  footBall.velocityX=-3
  footBall.addImage(footBallImg)
  footBall.scale=0.1


}