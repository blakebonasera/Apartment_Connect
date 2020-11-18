const { Tenant } = require('../models/tenant');

module.exports = {
    // C
    createTenant: (req, res) => {
        Tenant.create(req.body)
            .then(tenant => {
                res.json({ msg: "success!", tenant: tenant });
            })
            .catch(err => res.json(err));
    },
    // R
    allTenants: (req, res) => {
        Tenant.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneTenant: (req, res) => {
        Tenant.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // U
    updateTenant: (req, res) => {
        Tenant.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // D
    deleteTenant: (req, res) => {
        Tenant.deleteOne({ _id: req.params.id })
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
                  if (passwordIsValid) {
                    res
                      .cookie(
                        "usertoken",
                        jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                        {
                          httpOnly: true,
                        }
                      )
                      .json({ msg: "success!" });
                  } else {
                    res.status(400).json({ msg: "invalid login attempt" });
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
        res
          .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
            httpOnly: true,
            maxAge: 0,
          })
          .json({ msg: "ok" });
      },
    
      logout2(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
      },
      getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    
        User.findById(decodedJWT.payload._id)
          .then((user) => res.json(user))
          .catch((err) => res.json(err));
      },
    
}