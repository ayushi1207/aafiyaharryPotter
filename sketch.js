var background1, backgroundImage;
var harryPotter, harryPotterImage, harryLeft, harryRight, harryUp, harryDown;


function preload()
{
  backgroundImage = loadImage('background1.png');
  harryPotterImage = loadAnimation('19.png');
  harryRight = loadAnimation('2.png','3.png','4.png','5.png',
  '6.png','7.png','8.png','9.png','10.png');





}

function setup() {
  createCanvas(1200,4200);

  background1 = createSprite(300,200,20,20);
  background1.addImage(backgroundImage);
  background1.scale = 1.2;

  harryPotter = createSprite(displayWidth/2.5-13, displayHeight+2670, 100,100);
  harryPotter.scale = 1.5;
  harryPotter.shapeColor = "yellow";
  harryPotter.addAnimation("harry",harryPotterImage);

}

function draw() {
  background(255,255,255);  

  if(keyDown("right")){

    harryPotter.velocityX=2;
    harryPotter.addAnimation("harry",harryRight);

  }

  drawSprites();
}