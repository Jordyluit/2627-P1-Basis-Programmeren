let fix;
let img;
let img2;
let pressed = 0;
let buttonStart;
let buttonA;
let buttonB;
let buttonC;
let buttonD;
let vragen =[["Hoe heet het junior team van dit team, dat ook in de formule 1 rijdt" ],["Hoeveel coureurs hebben een GP gereden voor het team?"],['In welk jaar is het team opgericht?'],["Voor hoeveel geld hebben ze Jaguar F1 team overgekocht?"],["Hoeveel constructeurs-kampioenschappen hebben ze gewonnen?"],["Hoeveel team principals heeft het team gehad?"],["Hoeveel coureurs hebben 100 of meer GP’s voor het team gereden?"],["Hoeveel race overwinningen heeft het team behaald"],["Hoeveel coureurs-kampioenschappen heeft het team gewonnen?"],["Waar is dit team gevestigd?"]]
let antwoorden =[
  ["Racing Bulls","Racing Bulls","Toro Rosso","Rode Stier", "Alphatauri"],
  ["15","15","17","19","16"],
  ["2005","2005","2006","2004","2007"],
  ["$1","$1","$10.000.000","$25.000.000","$37.000.000"],
  ["6","6","3","1","12"],
  ["2","2","3","4","7"],
  ["4","4","3","2","1"],
  ["131","131","134","137","99"],
  ["8","8","6","3","12"],
  ["Milton Keynes, Groot Brittanië","Milton Keynes, Groot Brittanië","Spielberg, Oostenrijk","Maranello, Italië","Vancouver, Canada"]
]



function preload(){
 img = loadImage("Red_Bull_Racing_Logo_2026.svg.webp"); 
 img2 = loadImage("https://cdn.corenexis.com/f/CjdHIZLFjLX.jpg")
}


function startPress() {
  buttonStart.hide();
  pressed += 1;
}
  function Questions(){

  strokeWeight(13)
  stroke("black")
  textSize (40)
  fill ("white")
  text(vragen[fix], 230,100,200,600)
  }

function GameRound(){
  fix = int(random(0,9))


  

  ButtonA.show();
  ButtonB.show();
  ButtonC.show();
  ButtonD.show();

  ButtonA.html(antwoorden[fix][1]);
  ButtonB.html(antwoorden[fix][2]);
  ButtonC.html(antwoorden[fix][3]);
  ButtonD.html(antwoorden[fix][4]);
  
}

function setup() {
  createCanvas(800, 600);


  buttonStart = createButton("start");
  buttonStart.position (325,425);
  buttonStart.style('font-size', '64px');
  buttonStart.mousePressed(startPress);



  ButtonA = createButton("A");
  ButtonA.position (20,20);
  ButtonA.size (200,100);
  ButtonA.style('font-size', '32px')
  

  ButtonB = createButton("B");
  ButtonB.position (600,20);
  ButtonB.size (200,100);
  ButtonB.style('font-size', '32px')
  
  ButtonC = createButton("C");
  ButtonC.position (20,500);
  ButtonC.size (200,100);
  ButtonC.style('font-size', '32px')
  
  ButtonD = createButton("D");
  ButtonD.position (600,500);
  ButtonD.size (200,100);
  ButtonD.style('font-size', '32px')


  ButtonA.hide();
  ButtonB.hide();
  ButtonC.hide();
  ButtonD.hide();
}


function draw() {
  background(220);
  image(img, 0, 0, 800,600);

  Questions()
  if (pressed == 1){
    pressed = 2;
    image(img2,0,0,800,600)
    GameRound();
  }
}