let RichtingZon = 2
let ZonXPositie = 60
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background("Lightblue");


  //zon
  
  fill("#FFD700")
  circle(ZonXPositie,50,75)
  ZonXPositie = ZonXPositie + RichtingZon

  if (ZonXPositie > 830) {
    ZonXPositie = 0
  }


  
  //bergen
  //berg links
  fill ("hsl(0, 1%, 59%)")
  triangle(100,600,500,600,300,150)
  fill("white")
  triangle(375,300,230,300,300,150)
  //berg rechts
  fill ("hsl(0, 1%, 59%)")
  triangle(300,600,700,600,500,150)
  fill("white")
  triangle(425,250,500,150,550,250)
  //berg midden
  fill ("hsl(0, 1%, 59%)")
  triangle(200,600,600,600,400,0)
  fill("white")
  triangle(450,150,350,150,400,0)
  
  //gras langs de snelweg
  fill("green")
  rect(0,400,800,200)

//snelweg
 fill("grey")
 rect(0,450,800,100)
 fill("white")
 rect(0,490,50,25)  
 rect(100,490,50,25)  
 rect(200,490,50,25)   
 rect(300,490,50,25)  
 rect(400,490,50,25)
 rect(500,490,50,25)    
 rect(600,490,50,25)  
 rect(700,490,50,25)
 rect(800,490,50,25)  
}
