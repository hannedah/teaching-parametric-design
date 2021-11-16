const canvasHeight = 400;
const canvasWidth = 400;

// define variables
let palette = ["#4464a1", "#56a1c4", "#ee726b", "#ffc5c7", "#fef9c6", "#df5f50", "#5a3034", "#f5b800", "#ffcc4d", "#4b8a5f", "#e590b8"];
const stars = [];
const starRadius1 = 6;
const starRadius2 = 14;
const starMax = 30;
 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
// used this function as round() and random() didn't work
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// create properties of stars and push them in the 'stars' array
for (let s = 0; s < starMax; s += 1) {
  let newStar;
  let hit = true;

  // While Loop cycles over possible locations until the star doesn't hit another one
  while(hit){
    hit = false;
    newStar = {
      x: Math.random() * (canvasWidth - (2*starRadius2)) + starRadius2,
      y: Math.random() * (canvasHeight - (2*starRadius2)) + starRadius2,
      color: palette[Math.round(Math.random() * (palette.length - 1))], // chooses random color from color palette
      spikes: getRandomInt(4,9) // chooses random spike amount
    };
    for (let ss = 0; ss < stars.length; ss += 1) {
      // sends star-location to hit-test
      if (hitTest(newStar, stars[ss])) {
        hit = true;
      }
    }
  }

  stars.push(newStar);
}

// tests if positions of stars are overlapping
// example code misleading -> it says to devide the radius by two instead of the diameter 
function hitTest(star1, star2) {
  let x1Min = star1.x - starRadius2;
  let x1Max = star1.x + starRadius2;
  let y1Min = star1.y - starRadius2;
  let y1Max = star1.y + starRadius2;

  let x2Min = star2.x - starRadius2;
  let x2Max = star2.x + starRadius2;
  let y2Min = star2.y - starRadius2;
  let y2Max = star2.y + starRadius2;

  if (
    ((x2Min < x1Max && x2Min > x1Min) ||
    (x2Max < x1Max && x2Max > x1Min)) &&
    ((y2Min < y1Max && y2Min > y1Min) ||
    (y2Max < y1Max && y2Max > y1Min))
  ) {
    return true;
  } else {
    return false;
  }
}

// setting counters for stars and frames
let starCounter = 0;
let frameCounter = 0;
function setup() {
  createCanvas(canvasHeight, canvasWidth);
  frameRate(60);
}


function draw() {
  background("#1C2E4A");
  noStroke();
  
  // iterating until max stars or max star counter are reached
  // with this, I can slowly add the stars instead of having them appear all at once
  for (let s = 0; s < stars.length && s <= starCounter; s++) {
    push();
    translate(stars[s].x, stars[s].y); 
    rotate(frameCount / 80);
    translate(-stars[s].x, -stars[s].y); // Warum geht das?
    star(
      stars[s].x,
      stars[s].y,
      starRadius1,
      starRadius2,
      stars[s].spikes,
      stars[s].color
    );
    pop();
  }
  
  // add star every 35 frames
  if(frameCounter % 35 === 0) {
    starCounter < stars.length ? starCounter++ : null;
  }
  // increase frame counter after each draw
  frameCounter++;
}

// function to describe the star
function star(x, y, starRadius1, starRadius2, starSpikes, color) {
  fill(color);
  let angle = TWO_PI / starSpikes;
  let halfAngle = angle / 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * starRadius2;
    let sy = y + sin(a) * starRadius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * starRadius1;
    sy = y + sin(a + halfAngle) * starRadius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}