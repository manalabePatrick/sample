const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gcap",
  multipleStatements: true,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("succesfully connected to the database");
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hi Baby Boy" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
