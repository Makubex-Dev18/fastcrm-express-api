import { Router } from "express";

import {
  getAllContactLogs,
  createContactLog,
} from "../controllers/contactLogController.js";

export const contactLogRoutes = Router();

contactLogRoutes.get("/", getAllContactLogs);
contactLogRoutes.post("/", createContactLog);
