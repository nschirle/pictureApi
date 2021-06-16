"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// Home page route.
router.get('/', function (req, res) {
    res.send('image main');
});
// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
});
module.exports = router;
