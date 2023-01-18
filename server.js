const express = require("express");
const app = express();

const wordbook = [
  {
    id: 1,
    english: "key",
    korean: "열쇠",
  },
  {
    id: 2,
    english: "instagram",
    korean: "인스타그램",
  },
  {
    id: 3,
    english: "find",
    korean: "찾다",
  },
  {
    id: 1,
    english: "key",
    korean: "열쇠",
  },
];

app.use(express.static("build")); // build: react build 후 생겨난 폴더 이름

app.get("/api/words", (req, res) => {
  console.log("GET /");
  res.send(wordbook);
});

app.get("/*", (req, res) => {
  res.sendFile("build/index.html");
});

// app.post("/api/words", (req, res) => {

//   res.send("<h1>This is Word Book</h1>");
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Listening on PORT ${PORT}`));
