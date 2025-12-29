const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const DATA_FILE = "./backend/data.json";

app.get("/products", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

app.post("/add-product", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push(req.body);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.send({ message: "Product added successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
