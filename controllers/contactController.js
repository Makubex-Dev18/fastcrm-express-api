import prisma from "../lib/db.js";

export async function getAllContacts(req, res) {
  try {
    //crea en duro una compañia
    // await prisma.company.create({ data: { name: "AMZ" } });

    const contacts = await prisma.contact.findMany({
      // where:{id: { gt: 1 }}, // Solo contactos con id mayor a 0
      orderBy: { createdAt: "desc" },
      include: { company: true },
    });
    const companies = await prisma.company.findMany();
    return res.json({ contacts: contacts, companies: companies });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Nueva función para crear un contacto
export async function createContact(req, res) {
  try {
    const { name, whasapp, companyID } = req.body;
    if (!name || !whasapp) {
      return res.status(400).json({ error: "Name and whatsapp are required" });
    }
    const newContact = await prisma.contact.create({
      data: { name, whasapp, companyID },
    });
    return res.status(201).json({ contact: newContact });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
