function setup() {
  createCanvas(500, 500);
  frameRate(30);
  //20, 30, or 60
  background(255);
  //colorMode(RGB, 255, 255, 255, 100);
  
}

function draw() {
  ///background(random()*255, random()*255, random()*255);
  //background(200);
  //background(200);
  //fill(255, 0, 0);
  
	
  if(mouseIsPressed){
     strokeWeight(10);
  }else{
     strokeWeight(1);
     
  }
  
  noStroke();
  fill(255, 10);
  rect(0, 0, width, height);
  
  
 	
  
  //fill(255, 255, 0);
  stroke(255, 255, 0);
  ellipse(mouseX, mouseY, 70, 70);
  
  //fill(0);
  stroke(0);
  ellipse(mouseX+3, mouseY+3, 60, 60);
  
 
  
 
  
  
  
  
  
  
}