"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var imageHelper_1 = __importDefault(require("./imageHelper"));
var fs_1 = __importDefault(require("fs"));
var router = express_1.default.Router();
// list all photos in dir.
router.get("/", function (req, res) {
    res.send(imageHelper_1.default());
});
// return photo of specfic size.
router.get("/:name", function (req, res) {
    var name = req.params.name;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    if (fs_1.default.readdirSync("./resizedPhotos/").includes(name + height + width + ".png")) {
        console.log("in the IF");
        res
            .status(200)
            .sendFile(path_1.default.resolve("./resizedPhotos/" + name + height + width + ".png"));
    }
    else {
        console.log(width);
        console.log(height);
        sharp_1.default("./photos/" + name + ".jpg")
            .resize({ width: width, height: height })
            .toFormat("png")
            .png({ quality: 100 })
            .toFile("./resizedPhotos/" + name + height + width + ".png");
        res
            .status(200)
            .sendFile(path_1.default.resolve("./resizedPhotos/" + name + height + width + ".png"));
    }
});
exports.default = router;
