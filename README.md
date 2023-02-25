# indian-music-sequence-generator

[![Lint and test](https://github.com/jujhars13/indian-vocal-training/actions/workflows/main.yaml/badge.svg)](https://github.com/jujhars13/indian-vocal-training/actions/workflows/main.yaml)

Generate various classical indian music notational sequences to be used for vocal and instrumental practice

## Current Sequences

- two note jumps `twoNoteJumps/`: eg `["sr", "sg", "sm", "sp"]`

## Current Taaths (scales)

- `bilaval`
- `kalyaan`

## Usage

```javascript
const generator = require("indian-music-sequence-generator");

// generate a 5 note sequence in Bilaval
console.log(generator.twoNoteJumps("bilaval", 5));
```

## Development

```bash

# run tests
npm run test

# run tests with watch
npm run test:watch

# run linting
npm run lint
```
