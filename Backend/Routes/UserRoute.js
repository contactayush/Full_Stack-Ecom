import express from "express";
import { RegisterUser, getuser } from "../controller/User.js";

const userrouter = express.Router();

userrouter.post("/signup", RegisterUser);
userrouter.get("/getuser", getuser);

export default userrouter;
