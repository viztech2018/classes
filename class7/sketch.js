

var worms = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30);
    colorMode(HSB, 360, 100, 100, 100);
    
    for(var i=0; i<10; i++){
        var w = new Worm(random(360));
        worms.push(w);    
    }
}


function draw() {
    background(0);
    
    for(var i=0; i<worms.length; i++){
        var w = worms[i];
        w.update();
        w.draw(); 
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function mouseClicked() {
    
}

class Worm {
     
    constructor(anything){
        this.color = anything;
        this.position = createVector(width/2, height/2);
        this.trail = [];
    }
    
    update(){
        var step = createVector(1, 0);
        step.rotate(random(TWO_PI));
        this.position.add(step);
        //var copy = this.position.copy();
        var copy = createVector(this.position.x, this.position.y);
        this.trail.push(copy);
    }
    
    draw(){
        //noStroke();
        //fill(this.color, 100, 100);
        //ellipse(this.position.x, this.position.y, 5, 5);
        
        noFill();
        stroke(this.color, 100, 100);
        beginShape();
        for(var i=0; i<this.trail.length; i++){
            var p = this.trail[i];
            vertex(p.x, p.y);
        }
        endShape();
        
        
    }
    
    
    
    
    
    
}
