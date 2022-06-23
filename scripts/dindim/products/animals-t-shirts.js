const { merge } = require('../lib/merge');

const category = {
  tags: ['woman', 'man'],
  options: [
    {
      name: 'Size',
      values: [
        {
          name: 'XS',
        },
        {
          name: 'S',
        },
        {
          name: 'M',
        },
        {
          name: 'L',
        },
        {
          name: 'XL',
        },
        {
          name: '2XL',
        },
      ],
    },
  ],
};

const collection = {
  tags: ['animals', 't-shirt'],
  description: '',
  price: 25,
  currency: 'EUR',
};

const products = [
  {
    name: 'Save Animals T-Shirt',
    options: [
      {
        name: 'Color',
        values: [{ name: 'Burgundy' }, { name: 'Light Charcoal' }, { name: 'Melange Grey' }, { name: 'Navy' }],
        variant: true,
      },
    ],
  },
];

const animalsTShirts = merge({ products, category, collection, imagePath: 'animals/animals-t-shirts' });

module.exports = {
  animalsTShirts,
};
