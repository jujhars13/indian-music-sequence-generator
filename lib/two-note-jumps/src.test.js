const exercise = require("./src.js");

test("The first sequence is valid for bilaval scale", () => {
  expect(exercise("bilaval", 5)[0]).toBe({
    ascent: "SR SG SM SP",
    descent: "SP SM SG SR SS"
  });
});
