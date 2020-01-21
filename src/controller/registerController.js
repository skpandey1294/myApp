const User = require('../modal/User');

const userRegistration = (req, res) => {
  User.create({
    email_id: req.body.email_id,
    mobile_number: req.body.mobile_number,
    username: req.body.username,
    address: req.body.address
  });
};

module.exports = { userRegistration: userRegistration };
