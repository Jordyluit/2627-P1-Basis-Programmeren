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
let reset = 0
let ButtonX = 260
let ButtonY = 600
let ButtonW = 150
let ButtonH = 50




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
if (reset == 0 &&
    mouseX > ButtonX && mouseX < ButtonX + ButtonW  &&
    mouseY > ButtonY && mouseY < ButtonY + ButtonH) {
    Box1 = 0
    Box2 = 0
    Box3 = 0
    Box4 = 0
    Box5 = 0
    Box6 = 0
    Box7 = 0
    Box8 = 0
    Box9 = 0
  }
console.log("reset " + reset)
}

function draw() {
  background(190);
let RectX = 100
let RectY = 100




fill("white")
rect(ButtonX,ButtonY,ButtonW,ButtonH)
textSize(45)
fill("black")
text("reset",280,640)

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
    Box1 == Box3
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
     if (Box1 != 0 &&
    Box1 == Box4 &&
    Box1 == Box7
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
      if (Box1 != 0 &&
    Box1 == Box5 &&
    Box1 == Box9
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
        if (Box2 != 0 &&
    Box2 == Box5 &&
    Box2 == Box8
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
        if (Box3 != 0 &&
    Box3 == Box6 &&
    Box3 == Box9
  ){
     if (Player == 1) {
      winner = 2;
      
     } else if (Player == 2) {
      winner = 1;

     }
      textSize(60)
      fill("black")
      text ("Player " + winner + " wins",200,200)
    }
        if (Box3 != 0 &&
    Box3 == Box5 &&
    Box3 == Box7
  ){
     if (Player == 1) {
      winner = 2;
      
     } else if (Player == 2) {
      winner = 1;
    
     }
      textSize(60)
      fill("black")
      text ("Player " + winner + " wins",200,200)
    }
        if (Box4 != 0 &&
    Box4 == Box5 &&
    Box4 == Box6
  ){
     if (Player == 1) {
      winner = 2;
      
     } else if (Player == 2) {
      winner = 1;
      
     }
      textSize(60)
      fill("black")
      text ("Player " + winner + " wins",200,200)
    }
        if (Box7 != 0 &&
    Box7 == Box8 &&
    Box7 == Box9
  ){
     if (Player == 1) {
      winner = 2;
    
     } else if (Player == 2) {
      winner = 1;
   
     }
      textSize(60)
      fill("black")
      text ("Player " + winner + " wins",200,200)
    }


      if (Box1 != 0 && Box2 != 0 && Box3 != 0 && Box4 != 0 && Box5 != 0 && Box6 != 0 && Box7 != 0 && Box8 != 0 && Box9 != 0) {
        textSize(60)
        fill("black")
        text ("It's a draw!",200,200)
      }
  
    //mouse cursor
    fill("yellow")
    circle(mouseX,mouseY,50)
    }