const User = require('../modal/User');
const Order = require('../modal/Order');
const OrderDetail = require('../modal/OrderDetail');
const { emailValidation } = require('../utils/validation');
// ORDER PLACING

const orderPlacing = (req, res) => {
  //   const result = emailValidation(req.body);
  //   if (result.error) {
  //     res.status(400).send(result.error.details[0].message);
  //     return;
  //   }

  User.findOne({
    attribute: ['user_id'],
    where: { email_id: `${req.body.email}` }
  })
    .then(userObj => {
      console.log(userObj);
      return Order.create({ user_id: `${userObj.dataValues.user_id}` });
    })
    .then(createdOrderObject => {
      // we will pass an array of object in body of request which will contain all the detail like product_id, product_quantity and price
      let promise = req.body.orderLists.map(orderList => {
        return OrderDetail.create({
          order_id: `${createdOrderObject.order_id}`,
          product_id: `${orderList.product_id}`,
          product_quantity: `${orderList.product_quantity}`,
          price: `${orderList.price}`
        });
      });

      Promise.all(promise)
        .then(data => {
          console.log(data);
          res.send(data);
        })
        .catch(err => {
          console.log(err);
        });
    });
};

module.exports = { orderPlacing: orderPlacing };
