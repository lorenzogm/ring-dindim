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
  tags: ['animals', 't-shirt'],
  description: '',
  price: 17,
  currency: 'EUR',
};

const products = [
  {
    name: 'Dog & Cat Baby T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Fox Baby T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Lion Baby T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'My Friends Baby T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Owl Baby T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
  {
    name: 'Pig Baby T-Shirt',
    options: [{ name: 'Color', values: [{ name: 'White' }], variant: true }],
  },
];

const animalsBabyTShirts = merge({ products, category, collection, imagePath: 'animals/animals-baby-t-shirts' });

module.exports = {
  animalsBabyTShirts,
};
