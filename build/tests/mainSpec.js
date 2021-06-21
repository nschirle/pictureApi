"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageHelper_1 = __importDefault(require("../Routes/Image/imageHelper"));
var path_1 = __importDefault(require("path"));
describe("simple test for getting list of photos", function () {
    it('expect the return to be an array of photo names', function () {
        expect(imageHelper_1.default.getPhotos()).toBeInstanceOf(Array);
    });
});
describe("simple test for getting list of photos", function () {
    it('expect the return to be an array of photo names', function () {
        expect(imageHelper_1.default.getPhotos().includes("fjord.jpg")).toBeTrue;
    });
});
describe("simple test for getting list of photos", function () {
    it('expect the return to be an array of photo names', function () {
        expect(imageHelper_1.default.getPhotoPath("fjord", "400", "400").then).toBeTruthy(path_1.default.resolve("./resizedPhotos/fjord400400.png"));
    });
});
describe("simple test for getting list of photos", function () {
    it('expect the return to be an array of photo names', function () {
        expect(imageHelper_1.default.getPhotoPath("doesNotExist", "400", "400").then).toEqual("-1");
    });
});
