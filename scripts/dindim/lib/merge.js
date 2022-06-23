const fs = require('fs');
const path = require('path');

const { common } = require('./common');
const { slugify } = require('./slugify');

module.exports = {
  merge,
};

function merge({ products, category, collection, imagePath }) {
  return products.map((product) => {
    const colors = product.options[0].values;

    return {
      ...common,
      ...category,
      ...collection,
      tags: [...collection.tags, ...category.tags, ...colors.map((color) => slugify(color.name))],
      name: product.name,
      options: [...product.options, ...category.options],
      images: colors.map((color) => ({
        file: {
          data: {
            $binary: fs
              .readFileSync(
                path.join(__dirname, `../images/${imagePath}/${slugify(product.name)}-${slugify(color.name)}.png`),
              )
              .toString('base64'),
            $type: '00',
          },
        },
      })),
    };
  });
}
