const express = require("express");
const app = express();
const cors = require("cors");

// Configurar CORS
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json()); // Para futuras rutas que reciban JSON

// Rutas de prueba
app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
