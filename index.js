const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./routes/db/db");
const userRoutes = require("./routes/user.routes");

const app = express();

connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on port: ${port}`));
