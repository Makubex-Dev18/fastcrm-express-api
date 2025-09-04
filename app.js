import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.json({ message: "FastCRM Express API" });
});

app.listen(port, () => console.log("el puerto es: ", port));
