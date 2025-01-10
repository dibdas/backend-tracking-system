const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const cors = require("cors");
const dotEnvName = require("dotenv");
dotEnvName.config({ path: "./.env" });
const connectDb = require("./config/db");
const app = express();

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
const PORT = process.env.PORT || 9000;
app.get("/", (req, res) => {
  res.status(200).json({ message: "server ok" });
});
app.use("/api", routes);
connectDb.connecting();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
