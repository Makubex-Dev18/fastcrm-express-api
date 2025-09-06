import prisma from "../lib/db.js";

export async function getAllCompanies(req, res) {
  try {
    const companies = await prisma.company.findMany({
      include: {contacts:true},
      orderBy: [{ createdAt: "desc" }],
    });
    
    return res.json({ companies: companies});
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Nueva función para crear un contacto
export async function createCompany(req, res) {
  try {
    const { name, ruc } = req.body;
    const newContact = await prisma.company.create({ data: { name, ruc } });
    res.status(201).json({ contact: newContact, message: "Empresa creada" });
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
}
