function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    
    frameRate(30);
    background(255);


}

var x = 0;
var y = 200;

function draw() {
    background(255);
    
    noStroke();
    fill(255, 200, 0);
    
    var angle = (sin(frameCount)+1)/2 * PI/6;
    
    x = x + 2;
    
    if(x > width){
        x = 0;
    }
    arc(x, y, 60, 60, angle, -angle);
   
}
