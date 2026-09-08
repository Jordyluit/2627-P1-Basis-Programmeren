function setup() {
  createCanvas(1000, 1000);



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
}