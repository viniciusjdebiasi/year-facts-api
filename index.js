const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const PORT = 8080;

const services = require("./service");

app.get("/", (req, res) => {
  let year = req.query.year;

  if (services.ValidateYear(year)) {
    let factYear = services.ReturnFact(year);
    let JsonRes = { fact: factYear };
    res.json(JsonRes);
  } else {
    res.status(400).json({ erro: "Invalid year!" });
  }
});

app.listen(PORT, () => {
  let date = new Date();
  console.log(`SERVER STARTED | ${date} | LOCALHOST: ${PORT}`);
});
