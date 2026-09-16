let RichtingZon = 1/2
let ZonXPositie = 60
let maanXPositie = -800
let richtingMaan = 1/2
let licht = 675
let color = "red"
let colororange = "orange"
let colorgreen = "green"
let autoX1Positie = 0
let auto1Speed = 3
function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  //verkeerslicht
  if (keyCode == 13) {
    if (color === "red") {
      color = "black"
    }
    else if (colororange === "orange") {

      color = "red"
    }
  }
  console.log(color)
  if (keyCode == 13) {
    if (colorgreen === "green") {
      colorgreen = "black"

    }
    else if (colorgreen === color) {
      colorgreen = "green"
    }
  }
  console.log(colorgreen)
  if (keyCode == 13) {
    if (colororange === "orange") {
      colororange = "black"
    }

    else if (colororange === colorgreen) {
      colororange = "orange"
    }
  }
  console.log(colororange)

}

function draw() {
  background("Lightblue");


  //zon en maan

  fill("#FFD700")
  circle(ZonXPositie, 50, 75)
  ZonXPositie = ZonXPositie + RichtingZon
  maanXPositie = maanXPositie + richtingMaan

fill("#D6D6D6")
  circle(maanXPositie,50,75)

  if(ZonXPositie >= 1660){
    ZonXPositie = -60
  }
  if (maanXPositie >= 1660){
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

  //auto1
  fill("orange")
  rect(20 + autoX1Positie, 490, 100, 50)
  fill("lightblue")
  rect(75 + autoX1Positie, 500, 45, 20)
  fill("black")
  circle(40 + autoX1Positie, 540, 25)
  circle(100 + autoX1Positie, 540, 25)
  if (autoX1Positie >= 775)
    autoX1Positie = -200




  //verkeerslicht
  fill("grey")
  rect(650, 200, 50, 150);
  rect(660, 350, 30, 100);


  fill(color); {
    circle(licht, 230, 40)

  }


  fill(colorgreen); {
    circle(licht, 320, 40);

    autoX1Positie = autoX1Positie + auto1Speed

  }

  fill(colororange); {
    circle(licht, 275, 40)

  }

}

