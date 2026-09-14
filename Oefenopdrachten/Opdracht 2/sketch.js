function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let X = 100
  text (X,20,20)
  let greeting = "hello world"
  text (greeting,20,50)
  let A = 20
  let B = 10
  let som = A + B
  let verschil = A - B
  let product = A * B
  let uitkomst = A / B
  let y=80
  text ("optellen "+ som  ,20,y)
  noLoop(y=y+30)
  text("aftrekken " + verschil,20,y)
  noLoop(y=y+30)
  text("vermenigvuldigen " + product,20 ,y)
  noLoop(y=y+30)
  text ("delen door " + uitkomst ,20,y)
  noLoop(y=y+30)
  // X is een variabele
  // A en B ook en daarmee reken je de sommen uit, X is er om te testen
  //de greeting is er om te zorgen dat ik een check heb hoe ik de tekst erbij moet doen
  //Y heb ik ebruikt voor waarde van de y as die heb ik telkens stapgewijs naar beneden laten gaan, met een noLoop ertussen, zodat ze niet van het scherm af lopen

}
