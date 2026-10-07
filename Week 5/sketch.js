let img;
let pressed = 0;
let buttonStart;
let vragen =[["Hoe heet het junior team van dit team, dat ook in de formule 1 rijdt" ],["Hoeveel coureurs hebben een GP gereden voor het team?"],['In welk jaar is het team opgericht?'],["Voor hoeveel geld hebben ze Jaguar F1 team overgekocht?"],["Hoeveel constructeurs-kampioenschappen hebben ze gewonnen?"],["Hoeveel team principals heeft het team gehad?"],["Hoeveel coureurs hebben 100 of meer GP’s voor het team gereden?"],["Hoeveel race overwinningen heeft het team behaald"],["Hoeveel coureurs-kampioenschappen heeft het team gewonnen?"],["Waar is dit team gevestigd?"]]
let antwoorden =[
  ["Racing Bulls","Toro Rosso","Rode Stier, Alphatauri"],
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
}

function press() {
  pressed += 1;
}

function startPress() {
  buttonStart.hide();
}

function setup() {
  createCanvas(800, 600);

  buttonStart = createButton("start");
  buttonStart.position (325,425);
  buttonStart.style('font-size', '64px');
  
  buttonStart.mousePressed(startPress);
}


function draw() {
  background(220);
  image(img, 0, 0, 800,600);
}
