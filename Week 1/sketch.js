function setup() {
  createCanvas(1100, 1100);



function draw() {}
  background(220);

  //Stoplicht
  fill ("grey");
  rect (150,300,50,100);
  fill ("grey");
  rect (125,110,100,200);
  fill ("red")
  circle (174,150,50)
  fill ("orange")
circle (174,210,50);
  fill ("green")
  circle (174,270,50);

  // Naam  
fill("black");
textSize(32);
  text ("1.  Jordy Luit",50,50);
text("5.", 50,130);

//vlag
fill("red");
rect (275,25,150,50);
fill ("white");
rect (275,75,150,50);
fill("black");
text ("2.",250,25);

//Dobbelsteen
fill("white");
strokeWeight(10)
square(25,450,180,30);
fill ("black");
circle (116,535,25);
circle (70,590,25);
circle (70,485,25);
circle (160,590,25);
circle (160,485,25);
text ("6.",20,440);

//Schaakboord
strokeWeight(5)
square (250,250,300);
fill("white");
square (250,350,100);
square (350,250,100);
square (450,350,100);
square (350,450,100);
fill("black");
text ("3.",225,225);

//Huisje
fill(220);
square (25,700,100);
triangle (25,700,75,650,125,700);
fill("black");
text("4.",25,675);

//Mario
strokeWeight (0);
//red
fill("red");
rect(700,25,175,25);
rect(675,50,250,25);
rect(675,200,175,100);
rect(850,225,50,50);
square(900,250,25)
square(850,275,25)
rect(625,275,50,25)
square(650,250,25)
square(675,300,25)
rect(875,275,75,25)
square(850,300,25)
//huidskleur
fill(255,204,153);
rect (675,100,25,50);
rect (725,100,25,25);
rect (750,75,75,125);
rect (700,150,50,50);
rect (700,175,200,25);
rect (700,125,150,25);
rect (850,100,75,25);
rect (875,125,75,25);
rect (625,300,50,75);
square(675,325,25);
rect(875,300,75,75);
square(850,325,25);
//black
fill("black")
rect (825,75,25,50);
rect (825,150,100,25);
rect (850,125,25,25);
//brown
fill ("brown");
rect (675,75,75,25);
rect (700,100,25,50);
rect (650,100,25,75);
rect (675,150,25,25);
rect (725,125,25,25);
rect(650,400,75,50);
square(625,425,25);
rect(825,400,75,50);
square(900,425,25);
//blauw
fill("blue");
rect(725,200,25,75);
square(800,225,25);
rect(725,250,100,25);
rect(700,275,150,75);
rect(675,350,75,50);
rect(800,350,75,50);
//yellow
fill("yellow");
square(725,275,25);
square(800,275,25);
fill("black")
text("7.",625,50)

//Yoshi
//green
fill("lightgreen");
rect(675,600,50,25);
rect(650,625,50,25);
square(650,650,25);
rect(625,675,50,25);
rect(625,700,225,25);
rect(725,675,75,25);
rect(750,650,75,25);
square(825,675,25);
rect(600,725,250,50);
rect(750,775,75,25);
square(725,800,25);
rect(650,825,75,75);
rect(625,875,175,25);
rect(750,850,50,25);
rect(525,850,25,50);
rect(550,875,25,50);
rect(575,900,125,50);
rect(625,950,75,25);


//white
fill("white")
rect(675,650,25,50);
square(700,625,25);
rect(650,725,75,100);
rect(625,750,25,50);
square(725,775,25);
rect(725,825,25,50);
square(625,850,25);
rect(575,875,50,25);
square(525,900,25);
square(550,925,25);
rect(575,950,50,25);
rect(700,900,50,25);
rect(675,925,50,25);

//black
fill("black");
rect(700,650,25,50);
rect(800,675,25,25);

//red
fill("red")
rect(575,850,50,25);

//schoen en stekelkleur
fill(216, 144, 48);
rect(600,975,75,50);
square(675,1000,25);
square(600,700,25);
rect(575,725,25,50);
rect(600,775,25,50);
rect(625,800,25,50);

fill("black")
text("8.",600,650)
}