const exercise = require("./src.js");

test("The first sequence is valid for bilaval scale", () => {
  expect(exercise("bilaval", 5)[0].ascent).toEqual(["sr", "sg", "sm", "sp"]);

  expect(exercise("bilaval", 5)[0].descent).toEqual(["pm", "pg", "pr", "ps"]);
});

test("The second sequence is valid for bilaval scale", () => {
  expect(exercise("bilaval", 5)[1].ascent).toEqual(["rs", "rg", "rm", "rp"]);

  expect(exercise("bilaval", 5)[1].descent).toEqual(["mp", "mg", "mr", "ms"]);
});

test("The third sequence is valid for bilaval scale", () => {
  expect(exercise("bilaval", 5)[2].ascent).toEqual(["gs", "gr", "gm", "gp"]);

  expect(exercise("bilaval", 5)[2].descent).toEqual(["rp", "rm", "rg", "rs"]);
});

test("The third sequence is valid for kalyaan scale", () => {
  expect(exercise("kalyaan", 5)[2].ascent).toEqual(["gs", "gr", "gM", "gp"]);

  expect(exercise("kalyaan", 5)[2].descent).toEqual(["rp", "rM", "rg", "rs"]);
});

// test("The second sequence is valid for bilaval scale", () => {
//   expect(exercise("bilaval", 5)[1]).toStrictEqual({
//     ascent: "SP SM SG SR",
//     descent: "PM PG PR PS"
//   });
// });
