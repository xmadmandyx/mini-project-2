const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { sequelize } = require("./models");
const adminRoutes = require("./src/routes/admin.routes");



app.use(bodyParser.json());


app.use("/api/admin", adminRoutes);

app.listen(3000, async () => {
  console.log("listening on port 3000");
  await sequelize.authenticate();
});
