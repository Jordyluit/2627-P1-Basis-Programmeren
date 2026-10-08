let tempAntwoord = []
let score = 0
let fix;
let img;
let img2;
let pressed = 0;
let buttonStart;
let buttonA;
let buttonB;
let buttonC;
let buttonD;
let vraaggeweest;
let vragen =[["Hoe heet het junior team van dit team, dat ook in de formule 1 rijdt" ],["Hoeveel coureurs hebben een GP gereden voor het team?"],['In welk jaar is het team opgericht?'],["Voor hoeveel geld hebben ze Jaguar F1 team overgekocht?"],["Hoeveel constructeurs-kampioenschappen hebben ze gewonnen?"],["Hoeveel team principals heeft het team gehad?"],["Hoeveel coureurs hebben 100 of meer GP’s voor het team gereden?"],["Hoeveel race overwinningen heeft het team behaald"],["Hoeveel coureurs-kampioenschappen heeft het team gewonnen?"],["Waar is dit team gevestigd?"]]
let antwoorden =[
  ["Racing Bulls","Toro Rosso","Rode Stier", "Alphatauri"],
  ["15","17","19","16"],
  ["2005","2006","2004","2007"],
  ["$1","$10.000.000","$25.000.000","$37.000.000"],
  ["6","3","1","12"],
  ["2","3","4","7"],
  ["4","3","2","1"],
  ["131","134","137","99"],
  ["8","6","3","12"],
  ["Milton Keynes, Groot Brittanië","Spielberg, Oostenrijk","Maranello, Italië","Vancouver, Canada"]
]



function preload(){
 img = loadImage("Red_Bull_Racing_Logo_2026.svg.webp"); 
 img2 = loadImage("https://cdn.corenexis.com/f/CjdHIZLFjLX.jpg")
}


function startPress() {
  buttonStart.hide();
  pressed += 1;
}



function KnopA(){
pressed += 1 
antwoorden.splice(fix, 1)
vragen.splice(fix, 1)
checken()
}


function KnopB(){
  pressed +=1
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
  checken()
}

function KnopC(){
  pressed +=1
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
}

function KnopD(){
  pressed +=1
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
}


  function Questions(){

  strokeWeight(13)
  stroke("black")
  textSize (40)
  fill ("white")
  text(vragen[fix], 230,100,200,600)
  }

function GameRound(){
  fix = int(random(0, vragen.length - 1))



  ButtonA.show();
  ButtonB.show();
  ButtonC.show();
  ButtonD.show();

  tempAntwoord = shuffle(antwoorden[fix])

  ButtonA.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  ButtonB.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  ButtonC.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  ButtonD.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  
  console.log(fix)
}


function EindScherm(){
  ButtonA.hide();
  ButtonB.hide();
  ButtonC.hide();
  ButtonD.hide();
}


function checken(){
  console.log(antwoorden[0][0])
  if (antwoorden == [tempAntwoord][0]){
    
    score += 1
  }
  // console.log(score)
 
}


function setup() {
  createCanvas(800, 600);
//  console.log("fix " + fix)

  buttonStart = createButton("start");
  buttonStart.position (325,425);
  buttonStart.style('font-size', '64px');
  buttonStart.mousePressed(startPress);



  ButtonA = createButton("A");
  ButtonA.position (20,20);
  ButtonA.size (200,100);
  ButtonA.style('font-size', '32px')
  ButtonA.mousePressed(KnopA);

  ButtonB = createButton("B");
  ButtonB.position (600,20);
  ButtonB.size (200,100);
  ButtonB.style('font-size', '32px')
  ButtonB.mousePressed(KnopB);
  
  ButtonC = createButton("C");
  ButtonC.position (20,500);
  ButtonC.size (200,100);
  ButtonC.style('font-size', '32px')
  ButtonC.mousePressed(KnopC);
  
  ButtonD = createButton("D");
  ButtonD.position (600,500);
  ButtonD.size (200,100);
  ButtonD.style('font-size', '32px')
  ButtonD.mousePressed(KnopD);


  ButtonA.hide();
  ButtonB.hide();
  ButtonC.hide();
  ButtonD.hide();
}


function draw() {
  background(220);
  image(img, 0, 0, 800,600);
  if (pressed >= 2){
    image(img2, 0, 0, 800, 600)
  }
  if (pressed >= 21){
    image(img, 0, 0, 800, 600)
  }
  
  Questions()
  if (pressed == 1){
    pressed = 2;
    GameRound();
  }
  if (pressed == 3){
    pressed = 4
    GameRound()
  }
    if (pressed == 5){
    pressed = 6
    GameRound()
  }
    if (pressed == 7){
    pressed = 8
    GameRound()
  }
    if (pressed == 9){
    pressed = 10
    GameRound()
  }
    if (pressed == 11){
    pressed = 12
    GameRound()
  }
    if (pressed == 13){
    pressed = 14
    GameRound()
  }
    if (pressed == 15){
    pressed = 16
    GameRound()
  }
    if (pressed == 17){
    pressed = 18
    GameRound()
  }
    if (pressed == 19){
    pressed = 20
    GameRound()
  }
     if (pressed == 21){
    pressed = 22
    EindScherm()
  }
  
}