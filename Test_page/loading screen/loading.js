// Add your p5.js animation code here
var x = 0;
var y = 0;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
}

function draw() {
    background(255);
    ellipse(x, y, 50, 50);
    x = x + 1;
    y = y + 1;
}

// Create the p5.js sketch within the global scope
new p5(function(p) {
    p.setup = setup;
    p.draw = draw;
});

