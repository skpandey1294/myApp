const Payment = require('../modal/Payment');
const Order = require('../modal/Order');
const { paymentValidation } = require('../utils/validation');

const paymentByOrderId = (req, res) => {
  //   console.log(req.body);
  const result = paymentValidation(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  Payment.create({ payment_mode: `${req.body.payment_mode}` }).then(
    paymentDetail => {
      //   console.log();

      // if (
      //   Order.findOne({
      //     attribute: ['payment_id'],
      //     where: { order_id: `${req.body.order_id}` }
      //   })
      // )

      Order.update(
        {
          payment_id: `${paymentDetail.dataValues.payment_id}`,
          status: `Order Confirmed`
        },
        { where: { order_id: `${req.body.order_id}` } }
      ).then(() => res.send('payment has been done'));
    }
  );
};

module.exports = { paymentByOrderId: paymentByOrderId };
