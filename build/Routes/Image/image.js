"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var imageHelper_1 = __importDefault(require("./imageHelper"));
var fs_1 = __importDefault(require("fs"));
//import fileupload, { UploadedFile } from "express-fileupload";
var multer_1 = __importDefault(require("multer"));
var router = express_1.default.Router();
var upload = multer_1.default({ dest: './photos/',
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
// health ping for API surface.
router.get("/", function (req, res) {
    res.send("Photo API is functioning");
});
//gets photos that can be resized
router.get("/list", function (req, res) {
    res.send(imageHelper_1.default.getPhotos("photos"));
});
//gets all photos in cache
router.get("/cache", function (req, res) {
    res.send(imageHelper_1.default.getPhotos("resizedPhotos"));
});
router.post("/", upload.single("file"), function (req, res) {
    var photos = req.file;
    if (!req.file) {
        res.status(400).send("no photo attached");
    }
    var original = photos === null || photos === void 0 ? void 0 : photos.originalname;
    fs_1.default.rename("./photos/" + (photos === null || photos === void 0 ? void 0 : photos.filename), "./photos/" + original, function (err) {
        if (err) {
            res.send(err);
        }
        res.status(200).send("photo uploaded");
    });
});
// return photo of specfic size.
router.get("/:name", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, width, height, photoPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.params.name;
                width = String(req.query.width);
                height = String(req.query.height);
                return [4 /*yield*/, imageHelper_1.default.getPhotoPath(name, height, width)];
            case 1:
                photoPath = _a.sent();
                if (photoPath == "-1") {
                    res
                        .status(404)
                        .send("please request a valid image name");
                }
                else {
                    res
                        .status(200)
                        .sendFile(path_1.default.resolve(photoPath));
                }
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
