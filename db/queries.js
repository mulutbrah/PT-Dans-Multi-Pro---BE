const CHECK_EMAIL_EXIST = "SELECT u FROM users u WHERE u.email = $1";
const CHECK_EMAIL_AND_PASSWORD_MATCH =
  "SELECT u FROM users u WHERE u.email = $1 AND u.password = $2";
const GET_ALL_USERS = "SELECT * FROM users";
const ADD_USER =
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";

module.exports = {
  CHECK_EMAIL_EXIST,
  GET_ALL_USERS,
  ADD_USER,
  CHECK_EMAIL_AND_PASSWORD_MATCH,
};
