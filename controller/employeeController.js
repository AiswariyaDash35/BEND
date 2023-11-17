import express from "express";
import { createEmployee, getEmployees,getEmployee,updateEmployee,deleteEmployee} from "../service/employeeService.js";

const router=express.Router();
router.route("/").post(createEmployee);
router.route("/").get(getEmployees);
router.route("/:id").get(getEmployee);
router.route("/:id").put(updateEmployee);
router.route("/:id").delete(deleteEmployee);

export {router};