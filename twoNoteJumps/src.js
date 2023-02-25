const scales = require("../scales.js");

/**
 * Generate a two note jump sequence
 * @access private
 * @param int number of notes to use
 * @returns a suitable sequence
 */
const generateSequence = (numberOfNotes = 5) => {
  console.debug({ numberOfNotes });
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
        [2, 1],
        [2, 3],
        [2, 4],
        [2, 5]
      ],
      descent: [
        [4, 5],
        [4, 3],
        [4, 2],
        [4, 1]
      ]
    },
    {
      ascent: [
        [3, 1],
        [3, 2],
        [3, 4],
        [3, 5]
      ],
      descent: [
        [2, 5],
        [2, 4],
        [2, 3],
        [2, 1]
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
  const sequences = generateSequence(numberOfNotes);

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
