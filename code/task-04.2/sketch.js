const canvasHeight = 400;
const canvasWidth = 400;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  saveButton = createButton ('save sketch');
  saveButton.position(10, 410);
  saveButton.size(100);
  saveButton.mouseClicked(saveFunction);
}

function saveFunction() {
  save();
}

function draw() {
  noLoop();
  background(255);
  fill(0, 50);
  noStroke("black");
  strokeWeight(1);

  let x, y;
  let radiuses = [];
  
  for (let c = 0; c < 5; c++ ) {
      beginShape();
      for(let j = 0; j < 24; j++) {
        let radius = random(45, 80);
        let angle = j * 15;
        radiuses.push(radius);
        if(c > 0) radiuses[j] *= 1.25;

        x = (radiuses[j] * cos(Math.PI / 180 * angle)) +200;
        y = (radiuses[j] * sin(Math.PI / 180 * angle)) + 200;  
        curveVertex(x, y);
      }
      endShape(CLOSE);
  }
}


// 10x10cm