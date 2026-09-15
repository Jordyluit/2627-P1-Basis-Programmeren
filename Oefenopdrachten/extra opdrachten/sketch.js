let speed = 2;
let X = 50;
function setup() {
  createCanvas(1100, 1100);
}

function draw(){
 background (220);

circle(X,20,50);
X += speed;
}