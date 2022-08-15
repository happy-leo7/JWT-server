const express = require("express");
const PORT = 30000;

const app = express();

app.get("/", (req, res) => {
  res.send("happy leo");
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
