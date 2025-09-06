import { Templates } from "../models/templateModel.js";

const ALLOWED_TYPES = ['welcome', 'followup', 'meet'];

export async function getAllTemplates(req, res) {
  try {
    const { q, type, author } = req.query;
    let query = {};
    if (q) 
      query = {
        content: { $regex: q, $options: "i" },
      }

    if(type){
        // convertir a lowecase para comparacion case-insensitive
    const normalizedType = type.toLowerCase();

            if (!ALLOWED_TYPES.includes(normalizedType)) {
                return res.status(400).json({
                    error: 'Invalid type parameter',
                    allowedValues: ALLOWED_TYPES
                });
            }
            query = { ...query, type: normalizedType };   
    }  
    
    if (author) {
      // Puedes usar regex si quieres búsqueda parcial o exacta
      query.author = { $regex: author, $options: "i" };
      // Si quieres búsqueda exacta, usa: query.author = author;
    }


    const templates = await Templates.find(query);
    res.status(200).json(templates);
  } catch (e) {
    console.error(e);
  }
}

export async function createTemplate(req, res) {
  const { content, author, channel } = req.body;
  const newTemplate = await Templates.create({
    content: content,
    author: author,
    channel: channel,
  });
  return res.status(201).json({ template: newTemplate });
}


export async function updateTemplate(req,res) {
    try{
        const { id } = req.params;
        console.log(id);
        const { content, author } = req.body;
        await Templates.updateOne({ _id: id }, { content: content, author: author });
        return res.status(204).json({ message: "Actualizado!" });    
    }
    catch(e){
        console.error(e);
    }
}