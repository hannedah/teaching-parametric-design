starCount = 50;

function setup() {
  let CanvasHeight = 400;
  let CanvasWidth = 400;
  frameRate(1);
  createCanvas(CanvasHeight, CanvasWidth);
  noLoop();
}

function draw() {
  background("#1C2E4A");
  fill("#FEFF9E");
  noStroke();
  for (let s = 0; s < starCount; s++) {
    let starSpotX = random(0.03, 0.97);
    let starSpotY = random(0.03, 0.97);
    let starSpikes = round(random(4, 9));
    push();
    translate(width * starSpotX , height * starSpotY);
    star(2, 2, 3, 7, starSpikes);
    pop();
  }
}

function star(x, y, radius1, radius2, nPoints) {
  let angle = TWO_PI / nPoints;
  let halfAngle = angle / 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}