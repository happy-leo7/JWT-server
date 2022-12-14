import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth";

dotenv.config();

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("happy leo");
});

app.use("/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.PORT}`
  );
});
