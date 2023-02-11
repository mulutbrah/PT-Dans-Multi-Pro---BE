const pool = require("../db/connection");
const Helper = require("../helpers");

const {
  ADD_USER,
  CHECK_EMAIL_EXIST,
  CHECK_EMAIL_AND_PASSWORD_MATCH,
} = require("../db/queries");

const register = (req, res) => {
  const { name, email, password } = req.body;

  pool.query(CHECK_EMAIL_EXIST, [email]).then((user) => {
    if (user.rows.length) {
      res.status(200).json({
        code: 400,
        message: "Email already exist",
      });
    } else {
      pool
        .query(ADD_USER, [name, email, password])
        .then((newUser) => {
          {
            res.status(201).json({
              code: 201,
              message: "User created successfully",
            });
          }
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  pool.query(
    CHECK_EMAIL_AND_PASSWORD_MATCH,
    [email, password],
    (err, results) => {
      if (results.rows.length) {
        const user = results.rows[0];

        let token = Helper.generateJWT({
          email: user.email,
          name: user.name,
        });

        let finalToken = {
          token,
          name: user.name,
          email: user.email,
        };

        res.status(200).json(finalToken);
      }
    }
  );
};

module.exports = {
  register,
  login,
};
