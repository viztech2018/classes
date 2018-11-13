var arrayStrings;
var countries = [];

function preload(){
    arrayStrings = loadStrings("data.csv");
    
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30);
    
    print("hello world,life,afternoon".split(","));
    
    for(var i=1; i<arrayStrings.length; i++){
        var line = arrayStrings[i];
        var arr = line.split(",");
        var name = arr[0];
        var growth = float(arr[1]);
        
        if(!isNaN(growth)){
            var country = new Country(name, growth);
            countries.push(country);
            
        }
        
        
        
        
        //print(country + " " + growth);
        
        
    }
    

}


function draw() {
   
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

class Country{
    
    constructor(name, growth){
        this.name = name;
        this.growth = growth;
        
    }
    
    
}

/*Assignment class 9

    Sort the countries array by growth rate before drawing it (in p5.js).
    
    array.sort(comparator);
    
    function comparator(a, b){
        this function will return:
        1 if a > b
        -1 if a < b
        0 if a == b
        
    }
    
*/


