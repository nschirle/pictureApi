import express from "express";
import wiki from "./Routes/Image/image";


const app = express();
const port = 80;
//const wiki = require("./Routes/Image/image");
// ...
app.use("/photo", wiki);


app.get("/", (req, res) => {
  res.send("Express Is online and running");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
