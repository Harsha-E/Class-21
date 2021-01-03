var fixedRect, movingRect , obj;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "lavender";
  obj = createSprite(222, 100, 50, 80);
  obj.shapeColor = "lavender";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "lavender";
}

 function draw() {
  background(255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor = 'black';
    movingRect.shapeColor = 'black';
  }
  else if (isTouching(obj, movingRect)){
    obj.shapeColor = 'black';
    movingRect.shapeColor = 'black';
  }

  else {
    fixedRect.shapeColor = 'lavender';
    obj.shapeColor = 'lavender';
   movingRect.shapeColor = 'lavender';
  }
  drawSprites();
}
