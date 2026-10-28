let muis1 = {x:130,y:150}
let muis2 = {x:460,y:140}
let muis3 = {x:130,y:420}
let muis4 = {x:130,y:550}
let muis5 = {x:600,y:670}
let muis6 = {x:580,y:490}
let Muizen = [muis1, muis2, muis3, muis4, muis5, muis6]
let RandomAantal = 0

function preload(){
Muisje = loadImage("Muis/Muis.png")
}


function setup() {
  createCanvas(1000, 800);

  RandomAantal = round(random(6))
  for(let i=0; i<RandomAantal; i++){
    
    console.log(RandomAantal)
  }
}

function draw() {
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
  line(250,250,250,100)
  line(420,340,600,340)
  line(420,340,420,100)
  line(720,800,720,600)
  line(720,600,540,600)
  line(540,600,540,450)
  line(540,450,880,450)
  line(880,450,880,100)
  line(750,250,750,10)
  line(420,100,600,100)
  line(600,100,600,250)


  // Muizen in het doolhof
  // let LengteVanArray = Muizen.length()
  

  fill("green")
  textSize(20)
  text(mouseX + "," + mouseY,10,20)
  for(i=0; i<RandomAantal;i++){
  Muizen = shuffle(RandomAantal[i])
  image(Muisje,Muizen[i].x,Muizen[i].y,90,90)
  }
}
