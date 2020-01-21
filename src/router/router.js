const express = require('express');
const route = express.Router();

const { validatePayment } = require('../utils/validation');

const checksum_lib = require('../../Paytm_Web_Sample_Kit_NodeJs/checksum/checksum');

const port = 3000;

route.use(express.json());
const {
  getAllProducts,
  getCategories,
  getAllCategories,
  getAllVegProduct,
  getProductById
} = require('../controller/productController');

const { orderPlacing } = require('../controller/orderController');

const { orderHistory } = require('../controller/orderDetailsController');

const { paymentByOrderId } = require('../controller/paymentController');

const {
  addProduct,
  deleteProduct,
  updatePrice
} = require('../controller/adminController');

const { userRegistration } = require('../controller/registerController');

const {
  userProfile,
  editProfile
} = require('../controller/userProfileController');

// PRODUCT

route.get('/getAllProducts', getAllProducts);

route.get('/getProductByCategory/:categoryName', getCategories);

route.get('/categories', getAllCategories);

route.get('/veg', getAllVegProduct);

route.get('/getProductDetailsByID/:id', getProductById);

// ORDER

route.post('/placeOrder', orderPlacing);

// PAYMENT

route.post('/payment', paymentByOrderId);

// ORDER DETAILS

route.get('/orderHistory/:user_id', orderHistory);

// ADMIN

route.post('/addProduct', addProduct);

route.delete('/deleteProductById', deleteProduct);

route.put('/updateProductPriceById', updatePrice);

// USER PROFILE

route.get('/getUserProfile/:user_id', userProfile);

route.put('/getUserProfile/editProfile', editProfile);

//  USER REGISTRATION

route.post('/userRegistration', userRegistration);

//  PAYTM GATEWAY
// :order_id/:user_id/:amount/:email_id/:mobile_number
route.post('/paytmPayment', (req, res) => {
  const result = validatePayment(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  let params = {};

  (params['MID'] = 'dRrxrf65517528831554'),
    (params['WEBSITE'] = 'WEBSTAGING'),
    (params['CHANNEL_ID'] = 'WEB'),
    (params['INDUSTRY_TYPE_ID'] = 'Retail'),
    (params['ORDER_ID'] = `${req.body.order_id}`),
    (params['CUST_ID'] = `${req.body.user_id}`),
    (params['TXN_AMOUNT'] = `${req.body.amount}`),
    (params['CALLBACK_URL'] = 'http://localhost:' + port + '/callback'),
    (params['EMAIL'] = `${req.body.email_id}`),
    (params['MOBILE_NO'] = `${req.body.mobile_number}`);

  checksum_lib.genchecksum(params, 'iIWyA34wkCBrCfAz', (err, checksum) => {
    let txn_url = 'https://securegw-stage.paytm.in/order/process';

    let form_fields = '';
    for (x in params) {
      form_fields +=
        "<input type='hidden' name='" + x + "' value='" + params[x] + "'/>";
    }

    form_fields +=
      "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "'/>";

    const html =
      '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="' +
      txn_url +
      '" name="f1">' +
      form_fields +
      `</form><script type="text/javascript">document.f1.submit();${console.log(
        'Hello'
      )}</script></body></html>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  });
});

module.exports = route;
