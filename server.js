// server.js
const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

// Permetti tutte le origini temporaneamente (puoi restringere in seguito)
app.use(cors());

// Per leggere il body JSON
app.use(express.json());

// Endpoint POST /translate
app.post("/translate", (req, res) => {
    const { text } = req.body;
    console.log("Testo ricevuto:", text);

    exec(`python translate.py "${text}"`, (error, stdout, stderr) => {
        if (error) {
            console.error("Errore Python:", error);
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            console.error("STDERR Python:", stderr);
        }
        res.json({ translated: stdout.trim() });
    });
});

// Test server
app.get("/", (req, res) => res.send("Server attivo"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
