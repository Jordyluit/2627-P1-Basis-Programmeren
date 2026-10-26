let KatX = 700; 
let KatY = 700;
let press = 0;
let pressAlley = 0
let pressBoek = 0
let pressDoolhof = 0
let KatHealth = 320
let KatHappy = 320
let KatEnergy = 320
let KatHunger = 320
let eten = 30


function preload(){
  Kat = loadImage("Kat/SittingKat.png");
  achtergrond = loadImage("Background/Scene.png")
  HomeButton = loadImage("HomeButton/HomeButton.png")
  Alley = loadImage("Background/pixel-alley-decay-stockcake.png")
  Pagina = loadImage("Boek/Bladzijde.png")
  Pijl = loadImage("Pijl/Pijl.png")
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

  buttonDoolhof = createImg(
    "Doolhof/Doolhof.png"
  )
  buttonDoolhof.position(600,15)
  buttonDoolhof.style("height", "50px")
  buttonDoolhof.mousePressed(Doolhof)
  buttonDoolhof.hide()

  buttonBoek = createImg(
    "boek/Boek.png"
  )
  buttonBoek.style("width","256px")
  buttonBoek.style("height","256px")
  buttonBoek.position(10,700)
  buttonBoek.mousePressed(Boek)

  buttonEten = createButton("eten")
  buttonEten.position(100,100)
  buttonEten.mousePressed(food)
  buttonEten.hide()
  }
  

function Doolhof(){
pressDoolhof +=1
if (pressDoolhof >=2){
  pressDoolhof = 0
}
}

function food(){
KatHunger= KatHunger + eten
}

function start(){
  buttonMenu.show()
  buttonBoek.hide()
}
  
function Boek(){
  pressBoek += 1
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
   buttonAlley.show() && buttonDoolhof.show()
  }else if (press === 0){
   buttonAlley.hide() && buttonDoolhof.hide()
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


  if (pressBoek == 1){
    image(Pagina,0,0,1000,900)
    textSize (50)
    fill("black")
    text("LET OP: Dit boek is er alleen deze keer en daarna niet opnieuw, dus lees het goed door!", 100, 100, 900, 800)
  }
  if (pressBoek == 2){
    image(Pagina,0,0,1000,900)
    text("Je huisdier is een zwerfkat en houdt van het leven op straat, dit is dus ook de enige omgeving waar de kat te vinden zal zijn.",100,100,900,800)
  }
  if (pressBoek == 3){
    image(Pagina,0,0,1000,900)
    text("Als je, zodra je weer terug bent in het spel, op het huisje rechtsbovenin drukt, dan zie je vier verschillende balken, deze balken zijn de verschillende statussen van je huisdier. Ze zullen met verloop van tijd veranderen, zorg dus dat je huisdier zich goed voelt.", 100,100,900,800)
  }
  if (pressBoek == 4){
    image (Pagina,0,0,1000,900)
    text("Ook zal je nieuwe knoppen zien verschijnen als je in het homemenu zit, deze knoppen brengen je naar verschillende locaties. De meest linkerknop, brengt je naar een steegje waar een bar zijn restjes weggooit, dit is een mooie plek voor jouw huisdier om dus een lekker hapje te kunnen eten.", 100,100,900,800)
  }
  if (pressBoek == 5){
    image (Pagina,0,0,1000,900)
    text("Het tweede knopje, brengt je naar een kat en muisdoolhof, waar het jouw doel is om de muiz te vangen voordat deze uit het doolhof kan ontsnappen, hiervan gaat je Happy-bar omhoog en als je de muis vangt ook je hunger-bar, als je de muis niet vangt gaat je hunger-bar dus niet omhoog.", 100,100,900,800)
  }
  if (pressBoek == 6){
    image(achtergrond,0,0,1000,900)
    start()
    image(Kat, KatX, KatY, 200, 200)
  }



  
  if (press == 0 && pressBoek == 0) {
    image(achtergrond,0,0,1000,900)
    image(Kat, KatX, KatY, 200, 200)
 }else if (press == 1) {
    image(achtergrond,0,0,1000,900)
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




if (KatHunger >= 350){
  KatHunger = 350
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
      KatY -= 5
  if (keyIsPressed == true)
    if (keyCode == 40 || keyCode == 83)
      KatY += 5
  if (keyIsPressed == true)
    if (keyCode == 39 || keyCode == 68)
      KatX += 5
  if (keyIsPressed == true)
    if (keyCode == 37 || keyCode == 65)
      KatX -= 5
    console.log(pressBoek)

  if(pressBoek == 0){
    fill("orange")
    textSize (100)
    text("DRUK EERST OP HET BOEK", 100, 200, 900, 800)
    image(Pijl, 100,400)
  }
}
