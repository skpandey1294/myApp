const OrderDetails = require('../modal/OrderDetail');
const Order = require('../modal/Order');

const orderHistory = (req, res) => {
  Order.findAll(
    { attributes: ['order_id'] },
    {
      where: { user_id: req.params.user_id }
    }
  ).then(data => {
    console.log(data);
    res.send(data);
  });
};

module.exports = { orderHistory: orderHistory };
