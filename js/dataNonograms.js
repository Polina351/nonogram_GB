const nonograms = [
  {
    level: 'easy',
    name: 'camel',
    nonogram: [
      [0, 0, 0, 1, 1],
      [1, 1, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0],
      [1, 0, 1, 0, 0],
    ],
  },
  {
    level: 'easy',
    name: 'heart',
    nonogram: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
    ],
  },
  {
    level: 'easy',
    name: 'plane',
    nonogram: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
    ],
  },
  {
    level: 'easy',
    name: 'smile',
    nonogram: [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
  },
  {
    level: 'easy',
    name: 'tower',
    nonogram: [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ],
  },
  {
    level: 'hard',
    name: 'garlic',
    nonogram: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  {
    level: 'normal',
    name: 'hot coffee',
    nonogram: [
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  {
    level: 'normal',
    name: 'snowmen',
    nonogram: [
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    ],
  },
  {
    level: 'normal',
    name: 'monkey',
    nonogram: [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    ],
  },
  {
    level: 'normal',
    name: 'teapot',
    nonogram: [
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
  },
  {
    level: 'normal',
    name: 'cat',
    nonogram: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    ],
  },
  {
    level: 'hard',
    name: 'coffee',
    nonogram: [
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    ],
  },
  {
    level: 'hard',
    name: 'Mickey Mouse',
    nonogram: [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
  },
  {
    level: 'hard',
    name: 'frog',
    nonogram: [
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0],
      [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    ],
  },
  {
    level: 'hard',
    name: 'butterfly',
    nonogram: [
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
  },
];

export default nonograms;