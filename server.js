import express from "express";
import * as db from "./database.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));

app.get("/api/words", async (req, res) => {
  const wordbook = await db.getAll();
  res.send(wordbook);
});

// error handling (try catch in the database)

// Add
app.post("/api/words", async (req, res) => {
  const data = req.body;
  const result = await db.addWord(data.eng, data.kor);
  res.send(result);
});

// Edit
app.post("/api/words/edit/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await db.editWord(data.eng, data.kor, id);
  res.send(result);
});

// Delete
app.post("/api/words/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.deleteWord(id);
  res.send(result);
});

app.get("/*", (req, res) => {
  res.sendFile("build/index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Listening on PORT ${PORT}`));
