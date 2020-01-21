const Product = require('../modal/Product');
const {
  categoryNameValidation,
  productIdValidation
} = require('../utils/validation');

// 1) Get All The Products

const getAllProducts = (req, res) => {
  Product.findAll().then(products => {
    res.status(200).send(products);
  });
};

// 2) Get Category

const getCategories = (req, res) => {
  const result = categoryNameValidation(req.params);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  Product.findAll({
    where: { category: `${req.params.categoryName}` }
  }).then(products => {
    res.send(products);
  });
};

// 3) Get All Categories

const getAllCategories = (req, res) => {
  Product.findAll({ attributes: ['category'] }).then(category =>
    res.send(category)
  );
};

// 4) Get Veg Products

const getAllVegProduct = (req, res) => {
  Product.findAll({ where: { type: 'veg' } }).then(products => {
    console.log(products);
    res.send(products);
  });
};

// 5) Get Product By ID

const getProductById = (req, res) => {
  const result = productIdValidation(req.params);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  let { id } = req.params;
  Product.findAll({
    attributes: [
      'product_id',
      'product_name',
      'description',
      'price',
      'calories',
      'image_url',
      'category',
      'type'
    ],
    where: {
      product_id: `${id}`
    }
  }).then(details => {
    console.log(details);
    res.send(details);
  });
};

module.exports = {
  getAllProducts: getAllProducts,
  getCategories: getCategories,
  getAllCategories: getAllCategories,
  getAllVegProduct: getAllVegProduct,
  getProductById: getProductById
};
