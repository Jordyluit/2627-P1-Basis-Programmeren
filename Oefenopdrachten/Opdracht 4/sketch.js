let b = "X";
let X = 30;
let teller = 0
let licht = 55


function setup() {
  createCanvas(1000, 800);
}
function keyPressed(){
  if (keyCode == 66)
    console.log("B wordt ingedrukt")
if (keyCode == 32)
  console.log("Spatie wordt ingedrukt")
if (keyCode == 13)
  console.log("enter wordt ingedrukt")  
}

function keyReleased(){
  if (keyCode == 66)
    console.log("B wordt losgelaten")
if (keyCode == 32)
  console.log("Spatie wordt losgelaten")
if (keyCode == 13)
  console.log("enter wordt losgelaten")
}



function draw() {
  background(220);
  //square that appears
  if (keyIsPressed == true) {
    if (keyCode == 66) {
      X = true
   square (X,30,60)
    }
  
   
  }
  fill("black")
  textSize(15)
  text('1. Houd B ingedrukt om het blokje te laten verschijnen',20,20);
  text('2. Druk op spatie om het getal op 0 te zetten',20,120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan',20,240);
  text('4. beweeg de eightball met WASD of de pijltjes toetsen',450,20);

  //verkeerslicht
  fill("grey")
  rect(30,250,50,150);
  rect(40,400,30,100);
  fill("black")
  circle(licht,280,40)


  fill("green")
  circle(licht,370,40)

  fill("orange")
  circle(licht,325,40)
 
  if (keyIsPressed == true){
   if (keyCode == 13)
    fill("red")
    circle(licht,280,40)}
  

  //teller die je reset
  textSize(40)
  text ("teller:",20,160)
  teller = teller + 1
text (teller, 120,160)
if (teller >= 500){
  teller = -1
}
else if (keyIsPressed ){
  if(keyCode == 32){
    teller = 0
}
} 
}
