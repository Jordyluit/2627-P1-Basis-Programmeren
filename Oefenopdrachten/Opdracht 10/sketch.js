let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let button = []
let bwoah = 220



function setup() {
  createCanvas(800, 400);

  button1();

}

function draw() {
  background(bwoah);

}

function button1(){
let i = 0
 let x = 0;

 for(i; i <=5; i++){

 button[i] = createButton(kleuren[i]);
 button[i].style('background-color',kleuren[i]);
 button[i].position(x, 0);

 x += 50;

 button[i].mousePressed(bg);
}
}

function bg(){

bwoah = kleuren
}

