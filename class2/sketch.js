function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    
    frameRate(30);
    background(255);


}

function draw() {
    background(255);
    
    noFill();
    stroke(0);
    
     //draw a rectangle
    fill(0, 255, 0);
    rect(0, 0, width-1, height-1);
    
    //draw a line
    line(0, 0, width, height);
    
   
    
    //draw a quadrilateral
    fill(255, 255, 0);
    quad(0, height/2, width/2, 0, width, height/2, width/2, height);
    
    
    //draw a circle
    fill(0, 0, 255, 10);
    ellipse(width/2, height/2, width, height);
    
     fill(255, 0, 0);
    //draw a triangle
    triangle(width/2, 0, 0, height, width, height);
    
   
    
    
    
   
}
