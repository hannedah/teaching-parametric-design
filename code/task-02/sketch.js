let palette = ["#4464a1", "#56a1c4", "#ee726b", "#ffc5c7", "#fef9c6", "#df5f50", "#5a3034", "#f5b800", "#ffcc4d", "#4b8a5f", "#e590b8"];

function setup() {
  let CanvasHeight = 400;
  let CanvasWidth = 400;
  frameRate(2);
  createCanvas(CanvasHeight, CanvasWidth);
}

function draw() {
  let CanvasHeight = 400;
  let CanvasWidth = 400;
  let thirdOfWidth = CanvasWidth / 3;
  let fourthOfHeight = CanvasHeight / 4;
  background(255);
  for(let x = 0; x <= 4 * (thirdOfWidth); x += thirdOfWidth) {
    for (let y = fourthOfHeight; y <= CanvasHeight; y += fourthOfHeight) {
      if (x === thirdOfWidth || x === 2* (thirdOfWidth)) {
        fill ("#4464a1");
      } else {
        shuffle(palette, true);
        fill(palette[0]);
      }
      quad(x - thirdOfWidth / 2, y - fourthOfHeight / 2, x, y - fourthOfHeight, x + thirdOfWidth/2, y - fourthOfHeight / 2, x, y);
    }
    if (x === thirdOfWidth || x === 2* (thirdOfWidth)) {
      line(x, 0, x, CanvasHeight);
    }
  }
}

// Globale Variable für CanvasHeight und CanvasWidth nicht möglich?
// Kann man den background nicht transparent machen?