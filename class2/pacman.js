function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    
    frameRate(30);
    background(255);


}


var y = 200;
var x = 0;

function draw() {
    background(255);
    
    noStroke();
    fill(255, 200, 0);
    
    //var angle = PI/12;
    var angle = (sin(frameCount)+1)/2 * PI/6;
    
   
    
    if(x > width){
        x = 0;
    } else{
        x = x + 3;
        
    }
    //arc(x, y, 60, 60, angle, -angle);
    arc(x, height/2, 60, 60, angle, -angle);
   
}
