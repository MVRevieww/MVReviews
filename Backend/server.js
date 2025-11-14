const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user");

const app = express();

//add the middlewares
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello");
});
//startig the server at port 4000
app.listen(4000, "localhost", () => {
  console.log("server started at port 4000");
});
