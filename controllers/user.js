const pool = require("../db/connection");

const {
  ADD_USER,
  CHECK_EMAIL_EXIST,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  REMOVE_USER_BY_ID,
  UPDATE_USER_BY_ID,
} = require("../db/queries");

const getUsers = (req, res) => {
  pool.query(GET_ALL_USERS, (err, results) => {
    if (err) throw err;

    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(GET_USER_BY_ID, [id], (err, results) => {
    if (err) throw err;

    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { name, email, age, dob } = req.body;

  pool.query(CHECK_EMAIL_EXIST, [email], (err, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }

    pool.query(ADD_USER, [name, email, age, dob], (err, results) => {
      if (err) throw err;

      res.status(201).send("User created successfully");
    });
  });
};

const removeUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(GET_USER_BY_ID, [id], (err, results) => {
    const noUserFound = !results.rows.length;

    if (noUserFound) {
      res.send("User doesn't exist");
    }

    pool.query(REMOVE_USER_BY_ID, [id], (err, results) => {
      if (err) throw err;

      res.status(200).send("User deleted");
    });
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(GET_USER_BY_ID, [id], (err, results) => {
    const noUserFound = !results.rows.length;

    if (noUserFound) {
      res.send("User doesn't exist");
    }

    pool.query(UPDATE_USER_BY_ID, [name, id], (err, results) => {
      if (err) throw err;

      res.status(200).send("User updated");
    });
  });
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
  getUserById,
  removeUserById,
};
