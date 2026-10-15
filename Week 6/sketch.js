let KatX = 700; 
let KatY = 700;
let press = 0;
let pressAlley = 0
let pressBoek = 0
let KatHealth = 320
let KatHappy = 320
let KatEnergy = 320
let KatHunger = 320


function preload(){
  Kat = loadImage("Kat/SittingKat.png");
  achtergrond = loadImage("Background/Scene.png")
  HomeButton = loadImage("HomeButton/HomeButton.png")
  Alley = loadImage("Background/pixel-alley-decay-stockcake.png")
  Pagina = loadImage("Boek/Bladzijde.png")
}


function setup() {
  createCanvas(1000, 900);
  frameRate(10)


  buttonMenu = createImg(
  "HomeButton/HomeButton.png",
  "Menu Knop"
  )

  buttonMenu.position(930,10)
  buttonMenu.style("border-width", "3px")
  buttonMenu.style("border-radius", "1000px")
  buttonMenu.style("height", "50px")
  buttonMenu.mousePressed(Pressed)

  buttonAlley = createImg(
    "Background/pixel-alley-decay-stockcake.png"
  )
  buttonAlley.position(520,15)
  buttonAlley.style("height", "50px")
  buttonAlley.mousePressed(PressedAlley)
  buttonAlley.hide()


  buttonBoek = createImg(
    "boek/Boek.png"
  )
  buttonBoek.style("width","256px")
  buttonBoek.style("height","256px")
  buttonBoek.position(10,700)
  buttonBoek.mousePressed(Boek)
  }

  
function Boek(){
  pressBoek += 1
  buttonBoek.hide()
  buttonMenu.hide()
}

function PressedAlley(){
  pressAlley += 1;
  if (pressAlley >= 2){
   pressAlley = 0
  }
}

function Pressed() {
    press += 1;
  if (press >= 2){
    press = 0
  }
  if (press == 1){
   buttonAlley.show()
  }else if (press === 0){
   buttonAlley.hide()
  }
}


function Menu(){
  fill(220)
  rect(500, 0, 500, 500)
  fill("black")
  textSize(28)
  text("Health", 505,135)
  fill("white")
  rect(600, 100 , 350, 50)
  fill("green")
  rect(600, 100 , KatHealth, 50)
  fill("black")
  text("Happy",505,235)
  fill("white")
  rect(600, 200 , 350, 50)
  fill("green")
  rect(600,200,KatHappy,50)
  fill("black")
  text("Energy",505,335)
  fill("white")
  rect(600,300,350,50)
  fill("green")
  rect(600,300,KatEnergy,50)
  fill("black")
  text("Hunger",505,435)
  fill("white")
  rect(600,400,350,50)
  fill("green")
  rect(600,400,KatHunger,50)
  
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


  if (pressAlley == 1){
  image(Alley, 0,0,1000,900)
  image(Kat, KatX, KatY, 200, 200)
  }

  if (pressAlley == 1 && press == 1){
    Menu()
  }




  if (pressBoek == 1){
    image(Pagina,0,0,1000,900)
    textSize (100)
    text("YO", 100, 100)
  }
    





  if (KatHealth > 0){
    KatHealth -= 1
  }
  if (KatEnergy > 0){
    KatEnergy -= 1
  }
  if (KatHappy > 0){
    KatHappy -= 1
  }
  if (KatHunger > 0){
    KatHunger -= 1
  }
  // console.log("press" + press)
  // console.log("KatHealth" + KatHealth)
  // console.log("KatEnergy" + KatEnergy)
  // console.log("KatHunger" + KatHunger)
  // console.log("KatHappy" + KatHappy)



  if (keyIsPressed == true)
    if (keyCode == 38 || keyCode == 87)
      KatY -= 1
  if (keyIsPressed == true)
    if (keyCode == 40 || keyCode == 83)
      KatY += 1
  if (keyIsPressed == true)
    if (keyCode == 39 || keyCode == 68)
      KatX += 1
  if (keyIsPressed == true)
    if (keyCode == 37 || keyCode == 65)
      KatX -= 1
    console.log(pressBoek)
}
