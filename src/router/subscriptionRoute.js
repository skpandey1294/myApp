const express = require('express');
const route = express.Router();

route.post('/subscribe', (req, res) => {
  Susbscription.create({
    user_id: req.params.user_id,
    product_id: req.params.product_id,
    meals: req.params.meals,
    subs_status: true
  });
});

route.put('/unsubscribe', (req, res) => {
    Susbscription.update({
      subs_status: false
    },{
        where:{user_id: req.params.user_id}
    });
  });
