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
    
    //draw a line
    line(0, 0, width, height);
    
    //draw a triangle
    triangle(width/2, 0, 0, height, width, height);
    
    //draw a quadrilateral
    quad(0, height/2, width/2, 0, width, height/2, width/2, height);
    
    //draw a rectangle
    rect(0, 0, width-1, height-1);
    
    //draw a circle
    ellipse(width/2, height/2, width, height);
    

   
}
