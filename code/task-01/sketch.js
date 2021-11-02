function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#CAE1FF');

  // Untergrund
  stroke(245);
  fill(245);
  rect(0, 290, 400, 110);

  // Schneekugeln
  fill(255);
  stroke(255);
  circle(200, 300, 140);
  circle(200, 210, 115);
  circle(200, 130, 90);

  // Knöpfe
  fill(0);
  stroke(0);
  circle(200, 295, 8);
  circle(200, 260, 8);
  circle(200, 225, 8);
  circle(200, 190, 8);

  // Hut
  ellipse(200, 98, 110, 20);
  rect(165, 45, 70, 50, 5);

  // Gesicht
  circle(185, 125, 8);
  circle(215, 125, 8);
  fill(255, 136, 0);
  stroke(255, 136, 0);
  triangle(200, 135, 200, 142, 160, 145);
  fill(255)
  stroke(0)
  strokeWeight(2.3)
  arc(200, 145, 30, 30, 0, HALF_PI + QUARTER_PI);

  // Arme
  line (250, 190, 320, 170)
  line (300, 176, 325, 178)
  line (288, 179, 310, 161)

  line (150, 190, 80, 170)
  line (100, 176, 77, 180)
  line (112, 179, 92, 165)

  //Schneeflocken
  fill("rgba(255, 255, 255, 0.7)");
  stroke("rgba(255, 255, 255, 0.7)");
  circle(100, 270, 12);
  circle(75, 205, 10);
  circle(300, 225, 12);
  circle(360, 190, 10);
  circle(50, 70, 11);
  circle(115, 115, 12);
  circle(310, 125, 11);
  circle(370, 60, 10);
  circle(280, 30, 12);
  circle(135, 25, 10);
  circle(27, 155, 11);
  circle(15, 250, 10);
  circle(347, 286, 10);
}
