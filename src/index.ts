import express from "express";
import wiki from "./Routes/Image/image";

const app = express();
const port = 3000;
//const wiki = require("./Routes/Image/image");
// ...
app.use("/photo", wiki);

app.get("/", function(req: express.Request, res: express.Response): void {
  res.send("Express Is online and running");
});

app.listen(port, function(): void {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
