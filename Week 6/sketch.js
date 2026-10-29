let KatX = 40; 
let KatY = 100;
let press = 0;
let pressAlley = 0
let pressBoek = 0
let pressDoolhof = 0
let KatHealth = 320
let KatHappy = 320
let KatEnergy = 320
let KatHunger = 320
let eten = 30
let muis0;
let muis1;
let muis2;
let muis3;
let muis4;
let muis5;
let muisjes = [];
let HuidigeMuisjes =[];
let muizen;

let RandomAantal = 0
let randomPos;
let randommuis;
let yo = 0;


function preload(){
  Kat = loadImage("Kat/SittingKat.png");
  achtergrond = loadImage("Background/Scene.png")
  HomeButton = loadImage("HomeButton/HomeButton.png")
  Alley = loadImage("Background/pixel-alley-decay-stockcake.png")
  Pagina = loadImage("Boek/Bladzijde.png")
  Pijl = loadImage("Pijl/Pijl.png")
  Muisje = loadImage("Muis/Muis.png")
  KatDood = loadImage("Kat/KatDood.png")
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

 
  RandomAantal = round(random(6));


  muis0 = new muis(130, 150);
  muisjes.push(muis0);

  muis1 = new muis(460, 140);
  muisjes.push(muis1);

  muis2 = new muis(130, 420);
  muisjes.push(muis2);

  muis3 = new muis(130, 550);
  muisjes.push(muis3);

  muis4 = new muis(600, 670);
  muisjes.push(muis4);

  muis5 = new muis(580, 490);
  muisjes.push(muis5);

  let testMuisjes = [0,1,2,3,4,5]
  for (let i = 0; i < random(1,6); i++) {
    HuidigeMuisjes.push(testMuisjes.splice(random(0,testMuisjes.length-1),1))
  }
  console.log(HuidigeMuisjes.length)
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
  text("Food",505,435)
  fill("white")
  rect(600,400,350,50)
  fill("green")
  rect(600,400,KatHunger,50)
  
}






function draw() {
strokeWeight(1)
  

  if (pressBoek == 1){
    image(Pagina,0,0,1000,900)
    textSize (40)
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
    text("Ook zal je nieuwe knoppen zien verschijnen als je in het homemenu zit, deze knoppen brengen je naar verschillende locaties. De meest linkerknop, brengt je naar een steegje waar een bar zijn restjes weggooit, dit is een mooie plek voor jouw huisdier om dus een lekker hapje te kunnen eten, let erop dat dit ook beschimmeld kan zijn en dat er een kans is dat je vergiftigd wordt.", 100,100,900,800)
  }
  if (pressBoek == 5){
    image (Pagina,0,0,1000,900)
    text("Het tweede knopje, brengt je naar een doolhof, waar het jouw doel is om zoveel mogelijk muizen op te eten, de muizen zorgen ervoor dat je food bar hoger wordt, oftewel, dat je minder honger hebt. De kat vind het ook leuk om in het doolhof te zijn en zal dus ook gelukkiger worden als je het doolhof aan het spelen bent.", 100,100,900,800)
  }
  if (pressBoek == 6){
    image(achtergrond,0,0,1000,900)
    start()
  }



  
  if (press == 0 && pressBoek == 0) {
    image(achtergrond,0,0,1000,900)
    
 }else if (press == 1) {
    image(achtergrond,0,0,1000,900)
    Menu();
 }
 


  if (pressAlley == 1){
  image(Alley, 0,0,1000,900)
  }
if (KatHealth > 0 && (pressAlley == 0 || pressAlley == 1)){
    image(Kat, KatX, KatY, 200, 200)
 }
if (pressAlley == 1 && press == 1){
  fill("grey")
    Menu()
  }
  

  //Doolhof
  if (pressDoolhof == 1){
   

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
  strokeWeight(20)
  background("white")
  //Omlijning
  line(10,90,10,10)
  line(10,10,990,10)
  line(10,180,10,790)
  line(10,790,800,790)
  line(880,790,990,790)
  line(990,10,990,790)


  //Invulling Doolhof
  line(100,10,100,250)
  line(100,250,250,250)
  line(10,340,250,340)
  line(250,340,250,520)
  line(100,520,250,520)
  line(100,660,100,440)
  line(100,660,420,660)
  line(420,660,420,340)
  line(250,250,250,100)
  line(420,340,600,340)
  line(420,340,420,100)
  line(720,790,720,600)
  line(720,600,540,600)
  line(540,600,540,450)
  line(540,450,880,450)
  line(880,450,880,100)
  line(750,250,750,10)
  line(420,100,600,100)
  line(600,100,600,250)

  circle(KatX,KatY,50)

 

  random2();
}


if (KatHunger >= 350){
  KatHunger = 350
}

 

  
  
    





  if (KatHealth > 0){
    KatHealth -= 5
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


console.log(pressDoolhof)



 
    // console.log(pressBoek)

  if(pressBoek == 0){
    fill("orange")
    textSize (100)
    text("DRUK EERST OP HET BOEK", 100, 200, 900, 800)
    image(Pijl, 100,400)
  }
  if (KatHealth == 0){

  }
}





//Muis
class muis {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    image(Muisje, this.x, this.y, 90, 90);
  }
 CollisionCheck(KatX,KatY){
  console.log("KatX " +KatX +" KatY " +KatY)
  console.log("muisX " +(this.x + 55) +" muisY " +(this.y +55))
  if (KatX > this.x +55  -20 && KatX < this.x+55 + 20 &&
  KatY > this.y+55-20 && KatY < this.y + 55 + 20  ){
    console.log("jummy jummy muisje")

  }
  }

}


function random2() {
  for (j = 0; j < HuidigeMuisjes.length; j++) {
      muisjes[HuidigeMuisjes[j]].draw();
      muisjes[HuidigeMuisjes[j]].CollisionCheck(KatX,KatY);
  }
}