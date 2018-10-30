var Elements = [];
var NumberOfLines = 10; //number of lines in each Element
var NumberOfElements = 10; //number of elements on screen

function setup() {
    frameRate(1);
    createCanvas(1000, 1000);
    for (var i = 0; i < NumberOfElements; i++) {
        Elements[i] = []; //to create a nested array
        for (var j = 0; j < NumberOfLines; j++) {
            Elements[i].push(new jitteryChildern()); //to push lines in each Element
        }

    }
}


function draw() {
    background(50, 89, 100);
    console.log(Elements.length);
    for (var i = 0; i < Elements.length; i++) {
        for(var j = 0; j< Elements.length; j++){
            
            Elements[i][j].display();
        }
        

    }
}
function jitteryChildern() {

    this.x = width / 2;
    this.y = height / 2;
    //this.space = 0;
    this.width = 200;
    this.numberOfLines = 10;
    this.speed = 1;
    this.display = function () {
        this.space = random(-50, 50);
        //        this.angle = random(-2 * PI, 2 * PI);
        //        rotate(this.angle);

        strokeWeight(1);
        stroke(255);
        line(this.x, this.y + this.space, this.x + this.width, this.y + this.space);



    }
}