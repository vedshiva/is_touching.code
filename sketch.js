var mo_rec ,fi_rec;

function setup() {
  createCanvas(1200,800);

  mo_rec = createSprite(400, 200, 50, 100);
  mo_rec.shapeColor = "green";

  fi_rec = createSprite(400, 200, 100, 50);
  fi_rec.shapeColor = "green";
}

function draw() {
  background(0); 
  
  mo_rec.y = mouseY

  mo_rec.x = mouseX

if (mo_rec.x-fi_rec.x < mo_rec.width/2 + fi_rec.width/2 
  && fi_rec.x-mo_rec.x < mo_rec.width/2 + fi_rec.width/2 
  &&mo_rec.y-fi_rec.y < mo_rec.height/2 + fi_rec.height/2 
  && fi_rec.y-mo_rec.y < mo_rec.height/2 + fi_rec.height/2 ){
  mo_rec.shapeColor = "red";

  fi_rec.shapeColor = "red";

}else{
  mo_rec.shapeColor = "green";

  fi_rec.shapeColor = "green";

}



  drawSprites();
}