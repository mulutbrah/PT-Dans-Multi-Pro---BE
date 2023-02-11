const CHECK_EMAIL_EXIST = "SELECT u FROM users u WHERE u.email = $1";
const GET_ALL_USERS = "SELECT * FROM users";
const GET_USER_BY_ID = "SELECT * FROM users WHERE id = $1";
const ADD_USER =
  "INSERT INTO users (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const REMOVE_USER_BY_ID = "DELETE FROM users  WHERE id = $1";
const UPDATE_USER_BY_ID = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
  CHECK_EMAIL_EXIST,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  ADD_USER,
  REMOVE_USER_BY_ID,
  UPDATE_USER_BY_ID,
};
