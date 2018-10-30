var img;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    
    frameRate(30);
    background(255);
    
    img = loadImage("img.jpg");


}

var x = 0;
var y = 200;

function draw() {
    background(255);
    
    img.loadPixels();
    //print(img.pixels);
    //print(img.pixels.length);
    
    var sumR = 0;
    var sumG = 0;
    var sumB = 0;
    
    var count = img.height * img.width;
    
    for(let i = 0; i<img.pixels.length/4; i=i+4){
        
        var r = img.pixels[i];
        var g = img.pixels[i+1];
        var b = img.pixels[i+2];
        
        sumR = sumR + r;
        sumG = sumG + g;
        sumB = sumB + b;
           
    }
    
    var avgR = sumR/count;
    var avgG = sumG/count;
    var avgB = sumB/count;
    
    print(avgR  + "," + avgG + ", " + avgB);
    //AFTER the 
    
    
    /*
    
    image(img, 0, 0);
    
    stroke(0);
    strokeWeight(10);
    //strokeCap(ROUND);
    strokeJoin(ROUND);
    
    beginShape();
    var numberSides = 5;
    //numberSides = int(sqrt(mouseX));
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
    */
    
   
}
