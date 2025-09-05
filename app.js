import express, { json } from "express";
import mongoose from "mongoose";
import { templateRoutes } from "./routes/templateRoutes.js";
import { checkIndexes } from "./models/templateModel.js";

const app = express();

app.use(json());

const port = 3000;

//cargado el .env por nodemon
(async () => {
  await process.loadEnvFile(".env");
})();

const credencialesdb = process.env.mongodb_url || "";

//conexion a MONGODB
mongoose
  .connect(credencialesdb, {
    //deprecato la versiones actuales no es necerario
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

checkIndexes();

app.get("/", (req, res) => {
  return res.json({ message: "FastCRM Express API" });
});

app.use("/api/templates", templateRoutes);

app.listen(port, () => console.log("el puerto es: ", port));
