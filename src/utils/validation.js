const Joi = require('joi');
const emailValidation = body => {
  const schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
  };
  const resl = Joi.validate(body, schema);
  return resl;
};

// 2)

const categoryNameValidation = body => {
  const schema = {
    categoryName: Joi.string()
      .min(3)
      .required()
  };
  const resl = Joi.validate(body, schema);
  return resl;
};

// 2) jkl

const productIdValidation = body => {
  const schema = {
    id: Joi.number()
      .integer()
      .required()
  };
  const resl = Joi.validate(body, schema);
  return resl;
};

// 3) payment validation

const paymentValidation = body => {
  const schema = {
    payment_mode: Joi.string()
      .min(5)
      .required(),
    order_id: Joi.number()
      .integer()
      .required()
  };
  const resl = Joi.validate(body, schema);
  return resl;
};

// 4) product details validation

const validateProductDetails = body => {
  const schema = {
    product_name: Joi.string()
      .min(5)
      .required(),
    price: Joi.number().required(),
    description: Joi.string()
      .min(10)
      .required(),
    image_url: Joi.string()
      .min(5)
      .required(),
    calories: Joi.string()
      .min(3)
      .required(),
    nutrition_level: Joi.string()
      .min(3)
      .required(),
    type: Joi.string()
      .min(3)
      .max(7)
      .required(),
    category: Joi.string()
      .min(3)
      .required()
  };
  const resl = Joi.validate(body, schema);
  return resl;
};

// 5)
// order_id/:user_id/:amount/:email_id/:mobile_number
const validatePayment = body => {
  const schema = {
    order_id: Joi.number()
      .integer()
      .required(),
    user_id: Joi.number()
      .integer()
      .required(),
    amount: Joi.number()
      .integer()
      .required(),
    email_id: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    mobile_number: Joi.number()
      .integer()
      .min(10)
      .required()
  };
  const resl = Joi.validate(body, schema);
  return resl;
};

module.exports = {
  emailValidation: emailValidation,
  paymentValidation: paymentValidation,
  validateProductDetails: validateProductDetails,
  categoryNameValidation: categoryNameValidation,
  productIdValidation: productIdValidation,
  validatePayment: validatePayment
};
