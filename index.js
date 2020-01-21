const express = require('express');
const db = require('./src/config/database');
const app = express();
const env = require('dotenv');

const Order = require('./src/modal/Order');
const OrderDetail = require('./src/modal/OrderDetail');
const Payment = require('./src/modal/Payment');
const User = require('./src/modal/User');

env.config();

db.authenticate()
  .then(async () => {
    await User.sync();
    await Payment.sync();
    await Order.sync();
    await OrderDetail.sync();

    console.log('connected to database!!!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:');
    process.kill('');
  });

app.use('/getAllCard', require('./src/router/router'));

app.use('*', (req, res, next) =>
  res.status(400).send('Invalid URL : Page Not Found')
);

const port = process.env.Port || 3000;

app.listen(port, console.log(`listening on port ${port}`));
