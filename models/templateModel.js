import mongoose from "mongoose";
const { Schema } = mongoose;

const templateSchema = new Schema({
  type: { type: String, default: "welcome" },
  content: String,
  labels: [{ label: String }],
  author: String,
  /*role: { type: String, default: "user" },
  channel: String,*/
  createdAt: { type: Date, default: Date.now },
});

//crear indice despues de la definicion del schema
templateSchema.index({ type: 1 }); //1 = ascendente, -1 = descendente
//templateSchema.index({ content: "text", author: "text" }); // indice de texto

export const Templates = mongoose.model(
  "Templates",
  templateSchema,
  "templates"
);

export async function checkIndexes() {
  try {
    const indexes = await Templates.collection.getIndexes();
    console.log("Índices existentes:", indexes);
  } catch (error) {
    console.error("Error verificando índices:", error);
  }
}
