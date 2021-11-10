function setup() {
  let CanvasHeight = 1000;
  let CanvasWidth = 1000;
  createCanvas(CanvasHeight, CanvasWidth);
  angleMode(DEGREES);
  rectMode(CENTER);

}


function draw() {
  background(255);
  for (let h = -10; h < 10; h++) { //höhe
    for (let b = -10; b < 10; b++) { //breite
      for(let count = 1; count <=11; count += 1) {
          noFill();
          stroke("black");
          strokeWeight(2);
          push();
          rotate(45);
          translate(200 * h, 200 * b);
          let rectSize = 16 + count * 16;
          rect(
            b, 
            h,
            rectSize
          );
          pop();
      } 
    }
  }
  save();
  noLoop();
}