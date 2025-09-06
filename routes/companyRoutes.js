import { Router } from "express";
import {
  getAllCompanies,
  createCompany,
} from "../controllers/companyController.js";

export const companyRoutes = Router();

companyRoutes.get("/", getAllCompanies);
companyRoutes.post("/", createCompany);
