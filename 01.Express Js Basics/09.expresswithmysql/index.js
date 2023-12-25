const mysql = require("mysql");
 
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "useradmin",
  password: "admin123",
  database: "Personal",
  debug: false,
});
 
pool.query("SELECT * FROM students LIMIT 10", (err, rows) => {
  if (err) {
    console.log("Error occurred during the connection.");
  }
  console.log(rows[0]); // printing one row 
  console.log("\n================================");
  rows.forEach((row) => {
    console.log(row);
  });
});