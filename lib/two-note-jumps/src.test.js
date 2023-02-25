const exercise = require("./src.js");

test("The first sequence is valid for bilaval scale", () => {
  expect(exercise("bilaval", 5)[0].ascent).toEqual(["sr", "sg", "sm", "sp"]);

  expect(exercise("bilaval", 5)[0].descent).toEqual(["pm", "pg", "pr", "ps"]);
});

// test("The second sequence is valid for bilaval scale", () => {
//   expect(exercise("bilaval", 5)[1]).toStrictEqual({
//     ascent: "SP SM SG SR",
//     descent: "PM PG PR PS"
//   });
// });
