var stary = [];
const starCount = 10;

function setup() {
  let CanvasHeight = 400;
  let CanvasWidth = 400;
  frameRate(60);
  createCanvas(CanvasHeight, CanvasWidth);
  noLoop();

  for (var s = 0; s < starCount; s++) {
    let starSpotX = random();
    let starSpotY = random();
    let starSpikes = random(4, 9);
    var stary = {
      x: width * starSpotX,
      y: height * starSpotY,
      radius1: 3,
      radius2: 7,
      nPoints: starSpikes
    };
    stary.push(star);

    for (var s = 0; s < stars.length; s++) {
      let starSpotX = random();
      let starSpotY = random();
      let starSpikes = random(4, 9);
      fill("#FEFF9E");
      noStroke();
      push();
      translate(width * starSpotX , height * starSpotY);
      rotate(frameCount / 120);
      stars(2, 2, 3, 7, starSpikes);
      pop();
    }
}


function stars(x, y, radius1, radius2, nPoints) {
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