const path = require("path");
const fs = require("fs");

// eslint-disable-next-line import/no-extraneous-dependencies
// require('dotenv').config({ path: path.join(__dirname, '../.env.development') })

const { animalsBabyBodies } = require("./products/animals-baby-bodies");
const { animalsBabyTShirts } = require("./products/animals-baby-t-shirts");
const { animslaFittedTShirts } = require("./products/animals-fitted-t-shirts");
const { animalsKidTShirts } = require("./products/animals-kid-t-shirts");
const { animalsTShirts } = require("./products/animals-t-shirts");

const swell = require("swell-node").init(SWELL_STORE_NAME, SWELL_STORE_TOKEN);
createProducts()
  .then(() => console.log("finished"))
  .catch((e) => {
    console.log(e);
  });

async function createProducts() {
  const { results: productListInDatabase } = await swell
    .get("/products")
    .catch((e) => {
      console.error(e);
    });

  // animals
  await Promise.all([
    ...animalsBabyBodies.map((product) =>
      createProduct({ product, productListInDatabase })
    ),
    ...animalsBabyTShirts.map((product) =>
      createProduct({ product, productListInDatabase })
    ),
    ...animslaFittedTShirts.map((product) =>
      createProduct({ product, productListInDatabase })
    ),
    ...animalsKidTShirts.map((product) =>
      createProduct({ product, productListInDatabase })
    ),
    ...animalsTShirts.map((product) =>
      createProduct({ product, productListInDatabase })
    ),
  ]);
}

async function createProduct({ product, productListInDatabase }) {
  const currentProduct = productListInDatabase.find(
    (productInDatabase) => productInDatabase.name === product.name
  );

  if (currentProduct === undefined) {
    const productCreated = await swell.post("/products", product);
    if (productCreated.errors) {
      console.log(productCreated.errors);
    }
  } else {
    const productUpdated = await swell.put(
      `/products/${currentProduct.id}`,
      product
    );
    if (productUpdated.errors) {
      console.log(productUpdated.errors);
    }
  }
}
