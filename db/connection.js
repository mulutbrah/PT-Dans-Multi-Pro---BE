const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "job_list_database",
  password: null,
  port: 5432,
});

module.exports = pool;
