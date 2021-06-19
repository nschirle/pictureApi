"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function getPhotos() {
    var files = fs_1.default.readdirSync('./photos/');
    return files;
}
exports.default = getPhotos;
