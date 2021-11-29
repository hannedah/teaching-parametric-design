const jscad = require('@jscad/modeling')
const { line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus } = jscad.primitives;
const { extrudeRectangular, extrudeLinear, extrudeRotate } = jscad.extrusions;
const { colorize, colorNameToRgb } = jscad.colors;
const { union, subtract, intersect, scission } = jscad.booleans;
const { translate, rotate, scale, center, align } = jscad.transforms;

const main = () => {

  let floor = rectangle({
    size: [100, 100]
  });

  floor = colorize([0, 0, 0], extrudeLinear({ height: -0.1 }, floor));

  const propCheese = {
    center: [0, 0],
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI * 2,
    segments: 30
  }

  let cheese = circle(propCheese);

  propCheese.endAngle = Math.PI / 5;
  propCheese.radius = 10.1

  let pieceOfCheese = circle(propCheese);

  cheese = extrudeLinear({ height: 7 }, cheese);
  pieceOfCheese = extrudeLinear({ height: 7 }, pieceOfCheese);

  const propHoles = {
    radius: 1,
    center: [0, 0, 0],
    segments: 10
  }

  for (let h = 0; h < 80; h++) {
    const x = Math.random() * 22 - 10;
    const y = Math.random() * 22 - 10;
    const z = Math.random() * 10 - 2;
    //console.log("x: ", x, "y: ", y, "z: ", z)
    // holes = translate([x, y, z], holes); modifiziert das holes Objekt immer wieder => 1. Durchlauf center = 0,0,0, 2. Durchlauf center: zB 10,20,3 => nochmal verschieben, Löcher außerhalb von Käse
    propHoles.center = [x, y, z];
    const cutHole = sphere(propHoles);
    cheese = subtract([cheese, cutHole]);
    pieceOfCheese = subtract([pieceOfCheese, cutHole]);
  }

  cheese = subtract([cheese, pieceOfCheese]);
  pieceOfCheese = translate([12, 10, 0], rotate([Math.PI / 2, 0, 0], pieceOfCheese));

  const colorCheese = colorize(colorNameToRgb('yellow'), cheese); // RGB Farbangabe funktioniert nicht richtig, falsche Farbausgabe + keine Shadows
  const colorPieceOfCheese = colorize(colorNameToRgb('yellow'), pieceOfCheese);

  return [colorCheese, colorPieceOfCheese];
};

module.exports = { main };



// Warum kann man bei const den radius verändern? (für die ellipse) (im Video)