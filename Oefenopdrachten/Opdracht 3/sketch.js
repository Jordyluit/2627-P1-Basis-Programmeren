function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  let score = random(100)
  noLoop (score) 
  text (score,20,20)
  if (score > 90) {
  console.log("Uitstekend!");
}

if (score >=70 && score <=89 ) {
  console.log("Goed Gedaan!");
}

if (score >= 60 && score <=69) {
  console.log("voldoende");
}
if (score <=59) {
  console.log("onvoldoende");
}
}
