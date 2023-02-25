const scales = require("../scales.js");

const sequence = {
  ascent: [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5]
  ],
  descent: [
    [5, 4],
    [5, 3],
    [5, 2],
    [5, 1]
  ]
};

/**
 * Generate a two note jump sequence
 * @param string scale to use
 * @param int number of notes to use
 * @returns array sequence
 */
const sequenceGenerator = (scale = "bilaval", numberOfNotes = 5) => {
  const output = [];

  let ascent = sequence.ascent.reduce((accumulator, current) => {
    accumulator.push(
      current.reduce((a, c) => {
        return `${a}${scales[scale][c]}`;
      }, "")
    );
    return accumulator;
  }, []);

  let descent = sequence.descent.reduce((accumulator, current) => {
    accumulator.push(
      current.reduce((a, c) => {
        return `${a}${scales[scale][c]}`;
      }, "")
    );
    return accumulator;
  }, []);

  output.push({ ascent, descent });

  return output;
};

module.exports = sequenceGenerator;
