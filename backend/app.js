const express = require("express");
const dotenv = require("dotenv");

const { default: mongoose } = require("mongoose");
const router = require("./routes/bookRoutes");
dotenv.config();

const cors = require('cors');
const app = express();

//middleware

app.use(cors());
app.use(express.json());
app.use("/books", router);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("connected to database "))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
