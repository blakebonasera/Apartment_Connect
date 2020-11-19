const { User } = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    // C
    createUser: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },
    // R
    allUsers: (req, res) => {
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // U
    updateUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // D
    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    login(req, res) {
        User.findOne({ email: req.body.email })
          .then((user) => {
            if (user === null) {
              res.status(400).json({ msg: "invalid login attempt" });
            } else {
              bcrypt
                .compare(req.body.password, user.password)
                .then((passwordIsValid) => {
                  console.log("bcrypt ran")
                  if (passwordIsValid) {
                    console.log('password is valid')
                    res
                      .cookie(
                        //cookie key
                        "usertoken",
                        //cookie value
                        jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                        {
                          httpOnly: true,
                        }
                      )
                      .json({ msg: "success!", user: user });
                    console.log(res.cookies)
                  } else {
                    res.status(400).json({ msg: "invalid login attempt" });
                    console.log("invalid password")
                  }
                })
                .catch((err) =>
                  res.status(400).json({ msg: "invalid login attempt" })
                );
            }
          })
          .catch((err) => res.json(err));
      },

      logout(req, res) {
        console.log("i'm logging out")
        console.log(jwt.decode(req.cookies.usertoken, {complete: true}))
        // res
        //   .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
        //     httpOnly: true,
    
        //   })
        //   .json({ msg: "ok" });
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
        console.log(jwt.decode(res.cookies.usertoken, {complete: true}))
      },
      getLoggedInUser(req, res) {
        console.log(req.cookies);
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
        console.log('decodedJWT');
        console.log(decodedJWT);
        User.findById(decodedJWT.payload._id)
          .then((user) => {
            console.log('user');
            console.log(user);
            return res.json(user)
          })
          .catch((err) => res.json(err));
      },
    
}