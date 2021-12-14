const jscad = require("@jscad/modeling");
const {
  line,
  arc,
  circle,
  ellipse,
  rectangle,
  cube,
  sphere,
  cylinder,
  cuboid,
  roundedCuboid,
  geodesicSphere,
  ellipsoid,
  roundedCylinder,
  cylinderElliptic,
  torus,
} = jscad.primitives;
const { extrudeRectangular, extrudeLinear, extrudeRotate } = jscad.extrusions;
const { colorize, colorNameToRgb } = jscad.colors;
const { union, subtract, intersect, scission } = jscad.booleans;
const { translate, rotate, scale, center, align } = jscad.transforms;
const { polyhedron } = jscad.primitives;
const { hull } = jscad.hulls;

function polar(radius, angle) {
  const rad = (Math.PI / 180) * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {
    x,
    y,
  };
}

const main = () => {
  hexaBars = [];

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 18; y++) {
      const maxHeightHex = 4;

      const heightHex = Math.random() * maxHeightHex;
      const heightSpike = heightHex + Math.random();

      const top = [0, 0, heightSpike];
      const bottom = [0, 0, 0];

      const numPoints = 6;
      const radius = 1;

      const points = [top, bottom];

      const faces = [];

      for (let p = 0; p < numPoints; p++) {
        const point = polar(radius, (360 / numPoints) * p);
        points.push([point.x, point.y, heightHex]);
        let p1 = p + 2;
        let p2 = p + 3;
        let p3 = 0;
        if (p === numPoints - 1) {
          p2 = 2;
        }
        faces.push([p1, p2, p3]);
      }

      let shape = polyhedron({
        points: points,
        faces: faces,
        orientation: "outward",
      });

      let floorShape = extrudeLinear(
        {
          height: 0.1,
        },
        circle({
          radius: 1,
          center: [0, 0],
          segments: 6,
        })
      );

      let newHull = hull(shape, floorShape);

      hexaBars.push(
        translate([x * 3.0 + (y % 2 == 0 ? 1.5 : 0), y * 0.85, 0], newHull)
      );
    }
  }

  return union(hexaBars);
};

module.exports = {
  main,
};
