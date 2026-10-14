let KatX = 700; 
let KatY = 700;
let press = 0;
let KatHealth = 100

function preload(){
  Kat = loadImage("Kat/Kat.png");
  achtergrond = loadImage("Background/Scene.png")
  HomeButton = loadImage("HomeButton/HomeButton.png")
}


function setup() {
  createCanvas(1000, 900);
  buttonMenu = createImg(
  "HomeButton/HomeButton.png",
  "Menu Knop"
  )
  // buttonMenu = createButton()
  buttonMenu.position(930,10)
  // buttonMenu.style("background-color", "black")
  // buttonMenu.style("border-color", "black")
  buttonMenu.style("border-width", "3px")
  buttonMenu.style("border-radius", "1000px")
  buttonMenu.style("height", "50px")
  buttonMenu.mousePressed(Menu)
}

function Menu(){
  fill(220)
  rect(500, 0, 500, 500)
  fill("black")
  textSize(28)
  text("Health", 505,135)
  fill("green")
  rect(600, 100 , 350, 50)
  fill("black")
  text("Happy",505,235)
  fill("green")
  rect(600,200,350,50)
  fill("black")
  text("Energy",505,335)
  fill("green")
  rect(600,300,350,50)
  fill("black")
  text("Hunger",505,435)
  fill("green")
  rect(600,400,350,50)
  


  press += 1;
  if (press >= 3){
    press = 0
  }
}






function draw() {
  if (press == 0) {
    image(achtergrond,0,0,1000,1000)
    image(Kat, KatX, KatY, 200, 200)
 }else if (press == 1) {
    image(achtergrond,0,0,1000,1000)
    image(Kat, KatX, KatY, 200, 200)
    Menu();
  }
  
 


  //  if (keyIsPressed == true)
  //   if (keyCode == 38 || keyCode == 87)
  //     KatY -= 1
  // if (keyIsPressed == true)
  //   if (keyCode == 40 || keyCode == 83)
  //     KatY += 1
  // if (keyIsPressed == true)
  //   if (keyCode == 39 || keyCode == 68)
  //     KatX += 1
  // if (keyIsPressed == true)
  //   if (keyCode == 37 || keyCode == 65)
  //     KatX -= 1
}
