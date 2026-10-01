let posX = [];
let posY = [];
let posSize = [];

let r = [];
let g = [];
let b = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    posX.push(int(random(0, 800)));
    posY.push(int(random(0, 600)));
    posSize.push(int(random(2, 80)));
    posSize.sort(function (a, b) {  return a - b;  });
    r.push(int(random(0, 255)));
    g.push(int(random(0, 255)));
    b.push(int(random(0, 255)));
  }
}

function draw() {
  background(220);  
  for (let i = 0; i < 100; i++) {
    posY[i] = posY[i] - posSize[i]/200;
    posX[i] = posX[i] - posSize[i]/100;
    if (posX[i] <= -100)
    {
      posX[i] = 900;
    }
     if (posY[i] <= -100)
    {
      posY[i] = 700;
    }
    fill(r[i], g[i], b[i],200);
    circle(posX[i], posY[i], posSize[i]);
  }
}

function keyPressed() {
  if (keyCode === 8) {
    console.log("key")
    posX = [];
    posY = [];
    posSize = [];
    r = [];
    g = [];
    b = [];
    for (let i = 0; i < 100; i++) {
      posX.push(int(random(0, 800)));
      posY.push(int(random(0, 600)));
      posSize.push(int(random(10, 80)));
      r.push(int(random(0, 255)));
      g.push(int(random(0, 255)));
      b.push(int(random(0, 255)));
    }
  }
}