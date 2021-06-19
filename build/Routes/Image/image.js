"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var router = express_1.default.Router();
// Home page route.
router.get("/", function (req, res) {
    res.send("image main");
});
// About page route.
router.get("/photo/", function (req, res) {
    //let name = req.params.name;
    fs_1.default.readFile("./photos/192.jpg", function (err, data) {
        if (err) {
            throw err;
        }
        res.sendFile("C:/repo/pictureApi/photos/192.jpg");
    });
});
exports.default = router;
