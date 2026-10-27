function preload(){
Achtergrond = loadImage("SterrenAchtergrond.jpeg")
}
function setup() {
  createCanvas(1000, 800);
}

function draw() {
  // image(Achtergrond,0,0,1000,800)
  background(220);
  strokeWeight(20)

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
  line()

}
