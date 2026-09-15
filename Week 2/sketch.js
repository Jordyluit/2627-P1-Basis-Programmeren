function setup() {
  createCanvas(800, 600);
}
// 9/11 namaken, vliegtuig in het gebouw laten storten
// vliegtuig, explosie, gebouwen,
//twin towers bouwen 
function draw() {
  background("Lightblue");

  //zon
  let y = 60
  let sun = y
  fill("#FFD700")
  circle(60,y,100)

  
  //bergen
  //berg links
  fill ("hsl(0, 1%, 59%)")
  triangle(100,600,500,600,300,150)
  fill("white")
  triangle(375,300,230,300,300,150)
  //berg rechts
  fill ("hsl(0, 1%, 59%)")
  triangle(300,600,700,600,500,150)
  //berg midden
  fill ("hsl(0, 1%, 59%)")
  triangle(200,600,600,600,400,0)
    fill("white")
  triangle(450,150,350,150,400,0)

  

  




}
