const pool = require("../db/connection");
const Helper = require("../helpers");

const {
  ADD_USER,
  CHECK_EMAIL_EXIST,
  CHECK_EMAIL_AND_PASSWORD_MATCH,
} = require("../db/queries");

const register = (req, res) => {
  const { name, email, password } = req.body;

  pool.query(CHECK_EMAIL_EXIST, [email], (err, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }

    pool.query(ADD_USER, [name, email, password], (err, results) => {
      if (err) throw err;

      res.status(201).send("User created successfully");
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  pool.query(
    CHECK_EMAIL_AND_PASSWORD_MATCH,
    [email, password],
    (err, results) => {
      if (results.rows.length) {
        const user = results.rows;

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
