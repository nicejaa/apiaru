const express = require("express");
const app = express();
const cors = require("cors");
const express = require("express");

require("dotenv").config();

app.use(express.json());
app.use(cors());

const bookRouter = require("./routes/book.router");

app.use("/api", bookRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
