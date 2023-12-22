import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import itemRouter from "./Routes/ItemRoute.js";
dotenv.config();
const port = process.env.port_no;
app.use(express.json());
app.use(cors());
app.use("/item", itemRouter);
import { DB_CONNECT } from "./Config/Database.js";
DB_CONNECT();
app.listen(port, () => {
  console.log(`Server Started Successfully at ${port}`);
});
