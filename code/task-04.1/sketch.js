let CanvasHeight = 400;
let CanvasWidth = 400;

function setup() {
  createCanvas(CanvasHeight, CanvasWidth, SVG);
  saveButton = createButton ('save sketch');
  saveButton.position(10, 410);
  saveButton.size(100);
  saveButton.mouseClicked(saveFunction);
}

function saveFunction() {
  save();
}

function draw() {
  background(255);
  noFill();
  stroke("red");
  strokeWeight(1.5);
  for (let h = -1; h < 4; h++) { //x
    for (let b = -1; b < 5; b++) { //y
      push();
      translate(110 * h + 61.5, 95 * b + 16);
      if (b%2 === 0){ 
        translate(h + 56, 0);
        rotate(100);
      } else {
        translate(h + 1, 0);
        rotate(100);
      }
      hexagon(31.5, 6);
      pop();
    }
  }
  stroke("black");
  strokeWeight(1.5);
  for (let h = 0; h < 4; h++) { //x
    for (let b = 0; b < 4; b++) { //y
      push();
      translate(110 * h + 6.5, 95 * b + 48);
      if (b%2 === 0){ 
        translate(h + 55, 0);
        rotate(100);
      } else {
        translate(h + 1, 0);
        rotate(100);
      }
      hexagon(31.5, 6);
      pop();
    }
  }
}

function hexagon(radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * radius;
    let sy = sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}