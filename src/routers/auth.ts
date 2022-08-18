import express from "express";

const authRouter = express.Router();

authRouter.get("/signIn", (req, res) => {
  res.send("auth/signIn");
});

authRouter.get("/signUp", (req, res) => {
  res.send("auth/signUp");
});

export default authRouter;
