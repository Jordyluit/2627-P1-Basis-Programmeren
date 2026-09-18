let RichtingZon = 1/2
let ZonXPositie = 60
let maanXPositie = -800
let richtingMaan = 1/2

let trafficLight = 0;
const RED = 0;
const ORANGE = 1;
const GREEN = 2;


let car1X = 0
let car2X = 300;
let car3X = 200;

let car1Speed = 3
let car2Speed = 3;
let car3Speed = -6;

let wolk1X = 0
let wolk1Snelheid = -2

let wolk2X = 0
let wolk2Snelheid = -4

let wolk3X = 0
let wolk3Snelheid = -1


// let groen = false
function setup() {
  createCanvas(800, 600);
}


function draw() {
  moveCars();
  background("Lightblue");
 //zon en maan
  if (ZonXPositie >= 860){
    background("#191970")
  }
if (maanXPositie >= 960){
  background("lightblue")
}

//  if (background ==="#191970")
// {fill("green")
// circle(90,90,90)
// }

  fill("#FFD700")
  circle(ZonXPositie, 50, 75)
  ZonXPositie = ZonXPositie + RichtingZon
  maanXPositie = maanXPositie + richtingMaan

fill("#D6D6D6")
  circle(maanXPositie,50,75)

  if(ZonXPositie >= 1760){
    ZonXPositie = -60
  }
  if (maanXPositie >= 1760){
    maanXPositie = -60
  }
  
  





  //bergen
  //berg links
  fill("hsl(0, 1%, 59%)")
  triangle(100, 600, 500, 600, 300, 150)
  fill("white")
  triangle(375, 300, 230, 300, 300, 150)
  //berg rechts
  fill("hsl(0, 1%, 59%)")
  triangle(300, 600, 700, 600, 500, 150)
  fill("white")
  triangle(425, 250, 500, 150, 550, 250)
  //berg midden
  fill("hsl(0, 1%, 59%)")
  triangle(200, 600, 600, 600, 400, 0)
  fill("white")
  triangle(450, 150, 350, 150, 400, 0)

  //gras langs de snelweg
  fill("green")
  rect(0, 400, 800, 200)
   
//TrafficLight
  // Pole
  fill(60);
  rect(735, 250, 10, 200);

  // Traffic light box
  fill(40);
  rect(700, 180, 80, 170);

  // RED LIGHT
  if (trafficLight === RED) {
    fill(255, 0, 0);
  } else {
    fill(80);
  }

  circle(740, 215, 40);

  // ORANGE LIGHT
  if (trafficLight === ORANGE) {
    fill(255, 165, 0);
  } else {
    fill(80);
  }

  circle(740, 265, 40);
// GREEN LIGHT
  if (trafficLight === GREEN) {
    fill(0, 255, 0);
  } else {
    fill(80);
  }

  circle(740, 315, 40);
     //snelweg
  fill("grey")
  rect(0, 450, 800, 100)
  fill("white")
  rect(0, 490, 50, 25)
  rect(100, 490, 50, 25)
  rect(200, 490, 50, 25)
  rect(300, 490, 50, 25)
  rect(400, 490, 50, 25)
  rect(500, 490, 50, 25)
  rect(600, 490, 50, 25)
  rect(700, 490, 50, 25)
  rect(800, 490, 50, 25)

 //auto 3
  fill("yellow")
  rect(50+car3X,370,200,100,25)
  fill("lightblue")
  rect(50+ car3X,370,25,50)
  fill("black")
  circle(70+ car3X,470,50)
   circle(230+ car3X,470,50,)
  if (car3X <= -300)
    car3X= 775
  fill("#00ddff")
  square (50+car3X,430,10)

  //auto1
  fill("orange")
  rect(20 + car1X, 490, 100, 50,90)
  fill("lightblue")
  rect(70 + car1X, 490, 45, 20,90)
  fill("black")
  circle(40 + car1X, 540, 25)
  circle(100 + car1X, 540, 25)
  fill("#00ddff")
  circle(115+ car1X, 520,10)
  if (car1X >= 775)
    car1X = -200
  

  //auto 2

  strokeWeight (0)
  fill("pink")
  rect(40+ car2X, 490,150,50)
  rect(40 + car2X, 440,75,50)
  fill("lightblue")
  rect(115 + car2X, 440,75,50)
  fill("black")
  circle(60 + car2X,540,25) 
  circle(170 + car2X,540,25)
  if (car2X >= 775)
car2X =-200
  fill("#00ddff")
  square(180+car2X,500,10)

  //wolken

  fill(239,243,229)
  //wolk 1

  circle(50+ wolk1X,50,50)
  circle(75+ wolk1X,50,75)
  circle(100+ wolk1X,50,50)

  wolk1X = wolk1X + wolk1Snelheid
  if (wolk1X <= -150)
    wolk1X = 790
  
  //wolk 2
  circle(150+ wolk2X,100,50)
  circle(175+ wolk2X,100,75)
  circle(200+ wolk2X,100,50)

  wolk2X = wolk2X + wolk2Snelheid
  if (wolk2X <= -250)
    wolk2X = 790

  //wolk 3
  circle(550+ wolk3X,50,50)
  circle(575+ wolk3X,50,75)
  circle(600+ wolk3X,50,50)

   wolk3X = wolk3X + wolk3Snelheid
  if (wolk3X <= -7000)
    wolk3X = 750
}
function moveCars() {

  if (trafficLight === GREEN) {
    console.log('hiero')
    car1X += car1Speed;
    car2X += car2Speed;
    car3X += car3Speed;
  }

  if (trafficLight === ORANGE) {
    car1X += car1Speed * 0.5;
    car2X += car2Speed * 0.5;
    car3X += car3Speed * 0.5;
  }



}
function keyPressed() {
  if (keyCode === ENTER) {

    // RED -> GREEN -> ORANGE -> RED
    if (trafficLight === RED) {
      trafficLight = GREEN;
    } 
    else if (trafficLight === GREEN) {
      trafficLight = ORANGE;
    } 
    else {
      trafficLight = RED;
    }
  }


 

 
}
