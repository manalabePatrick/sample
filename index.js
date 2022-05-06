const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hi Baby Boy" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
