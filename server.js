const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("GET /");
  res.send("<h1>This is Word Book</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Listening on PORT ${PORT}`));
