const Product = require('../modal/Product');
const { validateProductDetails } = require('../utils/validation');

const addProduct = (req, res) => {
  const result = validateProductDetails(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
    image_url: req.body.image_url,
    calories: req.body.calories,
    nutrition_level: req.body.nutrition_level,
    type: req.body.type,
    category: req.body.category
  }).then(newProduct => res.send(newProduct));
};

const deleteProduct = (req, res) => {
  Product.destroy({
    where: {
      product_id: `${req.body.product_id}`
    }
  });
};

const updatePrice = (req, res) => {
  Product.update(
    {
      price: `${req.body.price}`
    },
    { where: { product_id: `${req.body.product_id}` } }
  );
};

module.exports = {
  addProduct: addProduct,
  deleteProduct: deleteProduct,
  updatePrice: updatePrice
};
