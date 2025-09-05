import { Router } from "express";
import {
  createTemplate,
  getAllTemplates,
  updateTemplate,
} from "../controllers/templateController.js";

export const templateRoutes = Router();

templateRoutes.get("/", getAllTemplates);
templateRoutes.post("/", createTemplate);
templateRoutes.put("/:id", updateTemplate);
