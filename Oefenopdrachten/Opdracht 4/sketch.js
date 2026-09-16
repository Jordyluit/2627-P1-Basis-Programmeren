let b = "X";
let X = 30;
let teller = 0
let licht = 55
let color = "red"
let colorgreen = "green"
let colororange = "orange"
let ballx = 450
let bally = 100


function setup() {
  createCanvas(1000, 800);
}
function keyPressed() {
  if (keyCode == 66)
    console.log("B wordt ingedrukt")
  if (keyCode == 32)
    console.log("Spatie wordt ingedrukt")
  if (keyCode == 13)
    console.log("enter wordt ingedrukt")


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

  //8-ball
  if (keyCode === 38)
    console.log("pijltje omhoog wordt ingedrukt")
  if (keyCode === 40)
    console.log("pijltje omlaag wordt ingedrukt")
  if (keyCode === 39)
    console.log("pijltje naar rechts wordt ingedrukt")
  if (keyCode === 37)
    console.log("pijltje naar links wordt ingedrukt")
  if (keyCode == 87)
    console.log("W wordt ingedrukt")
  if (keyCode == 83)
    console.log("S wordt ingedrukt")
  if (keyCode == 65)
    console.log("A wordt ingedrukt")
  if (keyCode == 68)
    console.log("D wordt ingedrukt")

}

function keyReleased() {
  if (keyCode == 66)
    console.log("B wordt losgelaten")
  if (keyCode == 32)
    console.log("Spatie wordt losgelaten")
  if (keyCode == 13)
    console.log("enter wordt losgelaten")
  if (keyCode === 38)
    console.log("pijltje omhoog wordt losgelaten")
  if (keyCode === 40)
    console.log("pijltje omlaag wordt losgelaten")
  if (keyCode === 39)
    console.log("pijltje naar rechts wordt losgelaten")
  if (keyCode === 37)
    console.log("pijltje naar links wordt losgelaten")
  if (keyCode == 87)
    console.log("W wordt losgelaten")
  if (keyCode == 83)
    console.log("S wordt losgelaten")
  if (keyCode == 65)
    console.log("A wordt losgelaten")
  if (keyCode == 68)
    console.log("D wordt losgelaten")
}



function draw() {
  background(220);
  //square that appears
  if (keyIsPressed == true) {
    if (keyCode == 66) {
      X = true
      square(X, 30, 60)
    }


  }
  fill("black")
  textSize(15)
  text('1. Houd B ingedrukt om het blokje te laten verschijnen', 20, 20);
  text('2. Druk op spatie om het getal op 0 te zetten', 20, 120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan', 20, 240);
  text('4. beweeg de eightball met WASD of de pijltjes toetsen', 450, 20);

  //verkeerslicht
  fill("grey")
  rect(30, 250, 50, 150);
  rect(40, 400, 30, 100);


  fill(color)
  circle(licht, 280, 40)


  fill(colorgreen)
  circle(licht, 370, 40)

  fill(colororange)
  circle(licht, 325, 40)




  //teller die je reset
  textSize(40)
  text("teller:", 20, 160)
  teller = teller + 1
  text(teller, 120, 160)
  if (teller >= 500) {
    teller = -1
  }
  else if (keyIsPressed) {
    if (keyCode == 32) {
      teller = 0
    }
  }

  //8-Ball
  fill("black")
  circle(ballx, bally, 100)
  fill("white")
  circle(ballx, bally, 70)
  fill("black")
  text("8", ballx, bally)
  if (keyIsPressed == true)
    if (keyCode == 38 || keyCode == 87)
      bally -= 1
  if (keyIsPressed == true)
    if (keyCode == 40 || keyCode == 83)
      bally += 1
  if (keyIsPressed == true)
    if (keyCode == 39 || keyCode == 68)
      ballx += 1
  if (keyIsPressed == true)
    if (keyCode == 37 || keyCode == 65)
      ballx -= 1
  if (ballx >= 1050) {
    ballx = -50
  }
  if (ballx <= -60) {
    ballx = 1050
  }
  if (bally >= 850) {
    bally = -50
  }
  if (bally <= -60) {
    bally = 850
  }
}