import prisma from "../lib/db.js";

export async function getAllContactLogs(req, res) {
  try {
    const contactLogs = await prisma.contactLogs.findMany({
      include: { contact: true },
      orderBy: [{ createdAt: "desc" }],
    });

    return res.json({ contactLogs: contactLogs });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Nueva función para crear un contacto
export async function createContactLog(req, res) {
  try {
    const { plantillaUse, contactID } = req.body;
    const newContactLog = await prisma.contactLogs.create({
      data: { plantillaUse, contactID },
    });
    res.status(201).json({ contactLog: newContactLog, message: "Registro de contacto creado" });
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
}
