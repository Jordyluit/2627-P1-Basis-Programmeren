let muis0;
let muis1;
let muis2;
let muis3;
let muis4;
let muis5;
let muisjes = [];

let muizen;

let RandomAantal = 0
let randomPos;
let randommuis;
let yo = 0;

function preload(){
  Muisje = loadImage("Muis.png")
}


class muis {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    image(Muisje, this.x, this.y, 90, 90);
  }
}


function setup() {
  createCanvas(1000, 800);

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


  fill("green")
  textSize(20)
  text(mouseX + "," + mouseY,10,20);

  random2();
  noLoop()
}


function random2() {
  for (j = 0; j <= 5; j++) {
    for(i=0; i<RandomAantal; i++){
      random(muisjes).draw();
    }
  }
}
