const express = require("express");
require("dotenv").config({ debug: true });

const app = express();

app.get("/", (req, res) => {
  res.send("happy leo");
});

app.listen(process.env.PORT, () => {
  console.log(
    `[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
