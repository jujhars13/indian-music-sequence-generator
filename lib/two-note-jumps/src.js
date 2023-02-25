const scales = require("../scales.js");

/**
 * Generate a two note jump sequence
 * @access private
 *
 * @returns a suitable sequence
 */
const generateSequence = () => {
  return [
    {
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
    },
    {
      ascent: [
        [1, 2],
        [1, 4],
        [1, 3],
        [1, 5]
      ],
      descent: [
        [5, 1],
        [5, 3],
        [5, 4],
        [5, 2]
      ]
    }
  ];
};

/**
 * combine the sequnce and output
 * @param string scale to use
 * @param int number of notes to use
 * @returns array sequence
 */
const combineSequence = (scale = "bilaval", numberOfNotes = 5) => {
  const output = [];
  const sequences = generateSequence();

  sequences.forEach((sequence) => {
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
  });

  return output;
};

module.exports = combineSequence;
