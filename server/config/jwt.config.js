const jwt = require("jsonwebtoken");

module.exports = {
  authenticate(req, res, next) {
    console.log("authenticate is running")
    console.log(req.cookies.usertoken);
    jwt.verify(
      //user token
      req.cookies.usertoken,
      //servers secret token
      process.env.JWT_SECRET,
      //call back function
      (err, payload) => {
        if (err) {
          res.status(401).json({ verified: false });
        } else {
          next();
        }
      }
    );
  },
};