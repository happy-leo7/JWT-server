import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("happy leo");
});

app.listen(process.env.PORT, () => {
  console.log(
    `[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
