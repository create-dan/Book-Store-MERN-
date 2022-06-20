const express = require("express");
const { default: mongoose } = require("mongoose");
const router = require("./routes/bookRoutes");
const cors = require('cors');
const app = express();

//middleware

app.use(cors());
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://dnyaneshwar:mongodb0611@cluster0.igu4nhv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
