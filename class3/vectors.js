var step, pos;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    
    frameRate(30);
    background(255);
    
    step = createVector(0, 0);
    pos = createVector(width/2, height/2);


}

function draw() {
    //background(255);
    
    stroke(0, 50);
    strokeWeight(1);

    
    //var ang = TWO_PI * random();
    var ang = frameCount/(sin(frameCount/100)+1.1);
    step.set(cos(ang), sin(ang));
    //step.mult(10*random());
    step.mult((sin(frameCount/100)+1)/2 * 5 + random());
    
    
    line(pos.x, pos.y, pos.x+step.x, pos.y+step.y);
    
    pos.add(step);
    
   
}
