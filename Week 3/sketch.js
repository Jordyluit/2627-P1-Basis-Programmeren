let player = 1
let RectX1 = 100
let RectX2 = 255
let RectX3 = 410
let RectY1 = 100
let RectY2 = 255
let RectY3 = 410
let RectW = 150
let RectH = 150
let Box1 = "grey"
let Box2 = "grey"
let Box3 = "grey"
let Box4 = "grey"
let Box5 = "grey"
let Box6 = "grey"
let Box7 = "grey"
let Box8 = "grey"
let Box9 = "grey"


function setup() {
  createCanvas(1000, 1000);
}
function mousePressed(){
  if (mouseButton == LEFT)
   
    if(player >= 3){
  player = 1
}
  //Box1
if (mouseIsPressed === true && player == 1 && Box1 == "grey" &&
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH 
){
  Box1 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box1 == "grey" &&
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH){
     Box1 = "red"
   player++

     //Box2
  }if (mouseIsPressed === true && player == 1 && Box2 == "grey" &&
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH 
){
  Box2 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box2 == "grey" &&
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH){
     Box2 = "red"
     player++
}

//Box3
if (mouseIsPressed === true && player == 1 && Box3 == "grey" &&
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH 
){
  Box3 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box3 == "grey" &&
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH){
  Box3 = "red"
  player++
}

//Box4
if (mouseIsPressed === true && player == 1 && Box4 == "grey" &&
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH 
){
  Box4 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box4 == "grey" &&
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH){
  Box4 = "red"
  player++
}

//Box5

if (mouseIsPressed === true && player == 1 && Box5 == "grey" &&
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH 
){
  Box5 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box5 == "grey" &&
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH){
  Box5 = "red"
  player++
}


//Box6
if (mouseIsPressed === true && player == 1 && Box6 == "grey" &&
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH 
){
  Box6 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box6 == "grey" &&
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH){
  Box6 = "red"
  player++
}

//Box7
if (mouseIsPressed === true && player == 1 && Box7 == "grey" &&
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY3 && mouseY < RectY3 + RectH 
){
  Box7 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box7 == "grey" &&
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY3 && mouseY < RectY3 + RectH){
  Box7 = "red"
  player++
}

//Box8
if (mouseIsPressed === true && player == 1 && Box8 == "grey" &&
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY3 && mouseY < RectY3 + RectH 
){
  Box8 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box8 == "grey" &&
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY3 && mouseY < RectY3 + RectH){
  Box8 = "red"
  player++
}

//Box9
if (mouseIsPressed === true && player == 1 && Box9 == "grey" &&
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY3 && mouseY < RectY3 + RectH 
){
  Box9 = "green"
  player++
}else if(mouseIsPressed === true && player == 2  && Box9 == "grey" &&
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY3 && mouseY < RectY3 + RectH){
  Box9 = "red"
  player++
}
if(Box1 && Box2 && Box3 && Box4 && Box5 && Box6 && Box7 && Box8 && Box9 == 'red' || 'blue'){
  Box1 && Box2 && Box3 && Box4 && Box5 && Box6 && Box7 && Box8 && Box9 == 'grey'}

console.log("Linker Muisknop")
    
}

function draw() {
  background("lightblue");





  strokeWeight(0)
  fill(Box1)
  rect (RectX1,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box2)
  rect (RectX2,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box3)
  rect (RectX3,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box4)
  rect (RectX1,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box5)
  rect (RectX2,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box6)
  rect (RectX3,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box7)
  rect (RectX1,RectY3, RectW,RectH)

  strokeWeight(0)
  fill(Box8)
  rect (RectX2,RectY3, RectW,RectH)

  strokeWeight(0)
  fill(Box9)
  rect (RectX3,RectY3, RectW,RectH)

  //Duidelijk cursor
  fill("yellow")
  circle(mouseX,mouseY,50)




}
