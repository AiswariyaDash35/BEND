import express from "express";
import {router} from "./controller/employeeController.js";
import { connectDB } from "./repository/employeeRepository.js";
import "dotenv/config.js"
import cors from "cors";

const app=express();
connectDB();

app.use(cors());//cross origin resource sharing
app.use(express.json());
app.use("/api/v1/employee",router);

app.listen(6000);
