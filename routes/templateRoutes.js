import { Router } from "express";
import {
  createTemplate,
  getAllTemplates,
  updateTemplate
} from "../controllers/templateController.js";
import { createContact } from "../controllers/contactController.js";

export const templateRoutes = Router();

templateRoutes.get("/", getAllTemplates);
templateRoutes.post("/", createTemplate);
templateRoutes.put("/:id", updateTemplate);

templateRoutes.post("/contacts", createContact);