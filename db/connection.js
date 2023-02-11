const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "job_list_database",
  password: "1412",
  port: 5432,
});

module.exports = pool;
