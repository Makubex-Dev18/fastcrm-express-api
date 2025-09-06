import { Router } from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

export const contactRoutes = Router();

contactRoutes.get("/", getAllContacts);
contactRoutes.post("/", createContact);