let Player = 1
// let RectX1 = 100
// let RectX2 = 255
// let RectX3 = 410
// let RectY1 = 100
// let RectY2 = 255
// let RectY3 = 410
let RectW = 150
let RectH = 150
let RectB = 10
let Box1 = 0
let Box2 = 0
let Box3 = 0
let Box4 = 0
let Box5 = 0
let Box6 = 0
let Box7 = 0
let Box8 = 0
let Box9 = 0
let Win = 0
let winner = 0;




function setup() {
  createCanvas(1000, 1000);
}

function mousePressed(){
  if (mouseButton == LEFT && Win == 0){
    console.log("Linker Muisknop")

let RectX = 100
let RectY = 100


if (Box1 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box1 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box2 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box2 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box3 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box3 = Player;
  Player++
}

 RectX = 100;
 RectY += RectH + RectB;

 if (Box4 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box4 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box5 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box5 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box6 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box6 = Player;
  Player++
}

 RectX = 100;
 RectY += RectH + RectB;

  if (Box7 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box7 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box8 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box8 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box9 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box9 = Player;
  Player++
}
  }
      if (Player > 2){
  Player = 1
}
console.log(Player)
}

function draw() {
  background(190);
let RectX = 100
let RectY = 100


strokeWeight(0)
  if(Box1 == 1) {
    fill("blue")
  } else if (Box1 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
   if(Box2 == 1) {
    fill("blue")
  } else if (Box2 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
    if(Box3 == 1) {
    fill("blue")
  } else if (Box3 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)

  
RectX = 100
RectY += RectH+ RectB;

  strokeWeight(0)
    if(Box4 == 1) {
    fill("blue")
  } else if (Box4 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
    if(Box5 == 1) {
    fill("blue")
  } else if (Box5 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
    if(Box6 == 1) {
    fill("blue")
  } else if (Box6 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)

RectX = 100
RectY = RectH *2.75 + RectB;


  strokeWeight(0)
    if(Box7 == 1) {
    fill("blue")
  } else if (Box7 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
    if(Box8 == 1) {
    fill("blue")
  } else if (Box8 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(0)
    if(Box9 == 1) {
    fill("blue")
  } else if (Box9 == 2) {
    fill("red");
  } else {
    fill("grey");
  }
  rect (RectX,RectY, RectW,RectH)


  if (Box1 != 0 &&
    Box1 == Box2 &&
    Box1 == Box3||
  ){
     if (Player == 1) {
      winner += 2;
      noLoop();
     } else if (Player == 2) {
      winner += 1;
      noLoop();
     }
      textSize(60)
      fill("black")
      text ("Player " + winner + " wins",200,200)
    }
   
  }