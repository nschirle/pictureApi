"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./Routes/Image/image"));
var app = express_1.default();
var port = 3000;
//const wiki = require("./Routes/Image/image");
// ...
app.use("/photo", image_1.default);
app.get("/", function (req, res) {
    res.send("Express Is online and running");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
exports.default = app;
