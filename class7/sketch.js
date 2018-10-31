

var worms = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30);
    colorMode(HSB, 360, 100, 100, 100);
    strokeJoin(ROUND);
    for(var i=0; i<100; i++){
        var w = new Worm(random(360));
        worms.push(w);    
    }
    
}


function draw() {
    background(0);
    blendMode(SCREEN);
    strokeWeight(3);
    
    for(var i=worms.length-1; i>=0; i--){
        var w = worms[i];
        w.update();
        if(w.isDead()){
            //remove w from the worms array
            worms.splice(i, 1);
        }
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
        this.lifeSpan = random(10, 1000);
        this.len = random(20, 200);
    }
    
    update(){
        var step = createVector(3, 0);
        step.rotate(random(TWO_PI));
        this.position.add(step);
        //var copy = this.position.copy();
        var copy = createVector(this.position.x, this.position.y);
        this.trail.push(copy);
        if(this.trail.length > this.len){
            this.trail.shift();
        }
        this.lifeSpan--;
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
    
    isDead(){
        if(this.lifeSpan <= 0) return true;
        else return false;
        // return lifeSpan <= 0;
        
    }
    
    
    
    
}
