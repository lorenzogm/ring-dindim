const { merge } = require('../lib/merge');

const category = {
  tags: ['baby'],
  options: [
    {
      name: 'Size',
      values: [
        {
          name: '0-3 Months',
        },
        {
          name: '3-6 Months',
        },
        {
          name: '6-12 Months',
        },
        {
          name: '12-18 Months',
        },
      ],
    },
  ],
};

const collection = {
  tags: ['animals', 'body'],
  description: '',
  price: 20,
  currency: 'EUR',
};

const products = [
  {
    name: 'Dog & Cat Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Fox Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Lion Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'My Friends Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Owl Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Pig Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  // {
  //   name: 'Roarr Body',
  //   options: [{ name: 'Color', values: [{ name: 'White' }] }],
  // },
  {
    name: 'Wild Animals Baby Body',
    options: [{ name: 'Color', values: [{ name: 'White' }] }],
  },
  // {
  //   name: 'Wild Dinos Baby Body',
  //   options: [{ name: 'Color', values: [{ name: 'White' }] }],
  // },
  // {
  //   name: 'Roarrr Shape Baby Body',
  //   options: [{ name: 'Color', values: [{ name: 'Powder Pink' }, { name: 'Soft Blue' }] }],
  // },
  // {
  //   name: 'Wild Dinos Shape Baby Body',
  //   options: [{ name: 'Color', values: [{ name: 'Powder Pink' }, { name: 'Soft Blue' }] }],
  // },
];

const animalsBabyBodies = merge({ products, category, collection, imagePath: 'animals/animals-baby-bodies' });

module.exports = {
  animalsBabyBodies,
};
