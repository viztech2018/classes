

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("canvas");
}

function draw() {
    background(255);
    noStroke();
    fill(0);
   
    for(let i = 0; i<20; i++){
        for(let j = 0; j<20; j++){
            var step = width / 20;
            var x = i*step;
            var y = j*step;
            var dist = sqrt(sq(x-mouseX)+sq(y-mouseY));
            var diam = 100/sqrt(dist+1);
            //diam = dist;
            if(diam > 25)
                diam = 25;
            else if(diam < 4)
                diam = 4;
            //limit function!
            ellipse(x, y, diam, diam);
            
        }
        
    }
}
