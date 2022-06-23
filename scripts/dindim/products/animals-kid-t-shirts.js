const { merge } = require('../lib/merge');

const category = {
  tags: ['kid'],
  options: [
    {
      name: 'Size',
      values: [
        {
          name: '3-4 Years',
        },
        {
          name: '5-6 Years',
        },
        {
          name: '7-8 Years',
        },
        {
          name: '9-10 Years',
        },
        {
          name: '11-12 Years',
        },
      ],
    },
  ],
};

const collection = {
  tags: ['animals', 't-shirt'],
  description: '',
  price: 18,
  currency: 'EUR',
};

const products = [
  {
    name: 'Dog & Cat Kid T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Fox Kid T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Lion Kid T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'My Friends Kid T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Owl Kid T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Pig Kid T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
];

const animalsKidTShirts = merge({ products, category, collection, imagePath: 'animals/animals-kid-t-shirts' });

module.exports = {
  animalsKidTShirts,
};
