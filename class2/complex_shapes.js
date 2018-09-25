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
    
    stroke(0);
    strokeWeight(10);
    //strokeCap(ROUND);
    strokeJoin(ROUND);
    
    beginShape();
    var numberSides = 10;
    for(let a = 0; a<numberSides; a++){
        var translationX = width/2;
        var translationY = height/2;
        var radius = (sin(frameCount/10)+1)*50+10;
        var px = cos(TWO_PI/numberSides * a) * radius;
        var py = sin(TWO_PI/numberSides * a) * radius;
        
        vertex(px+translationX, py+translationY);
        
        radius = radius/2;
        var px = cos(TWO_PI/numberSides * a + TWO_PI/numberSides/2 ) * radius;
        var py = sin(TWO_PI/numberSides * a + TWO_PI/numberSides/2) * radius;
        
        vertex(px+translationX, py+translationY);
    }
    
    endShape(CLOSE);
    
    
   
}
