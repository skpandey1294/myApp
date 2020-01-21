const User = require('../modal/User');

const userProfile = (req, res) => {
  User.findOne({
    where: { email_id: res.body.email_id }
  });
};

const editProfile = (req, res) => {
  User.update(
    { mobile_number: res.body.mobile_number },
    {
      where: { email_id: res.body.email_id }
    }
  );
};
module.exports = { userProfile: userProfile, editProfile: editProfile };
