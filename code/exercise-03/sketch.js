function setup() {
  let CanvasHeight = 400;
  let CanvasWidth = 400;
  createCanvas(CanvasHeight, CanvasWidth);
}

function draw() {
  background(100);
  fill(255);
  stroke(0);
  for (let h = 0; h < 5; h++) { //höhe
    for (let b = 0; b < 5; b++) { //breite
      push();
      translate(110 * h, 110 * b);
      if (b%2 === 0){
        rotate(frameCount / -100.0);
      } else {
        rotate(frameCount / 100.0);
      }
      hexagon(0, 0, 80, 6);
      pop();
    }
  }
}

function hexagon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}