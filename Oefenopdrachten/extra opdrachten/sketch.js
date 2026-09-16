function setup() {
  createCanvas(100, 100);

  describe("A gray square. The mouse's x- and y-coordinates are displayed as the user moves the mouse.");
}

function draw() {
  background(200);

  // Style the text.
  textAlign(CENTER);
  textSize(16);

  // Display the mouse's coordinates.
  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);
}