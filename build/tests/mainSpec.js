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
var supertest_1 = __importDefault(require("supertest"));
var imageHelper_1 = __importDefault(require("../Routes/Image/imageHelper"));
var index_1 = __importDefault(require("../index"));
var path_1 = __importDefault(require("path"));
//import { application } from "express";
supertest_1.default("http://localhost:5555");
describe("simple test for getting list of photos", function () {
    it("expect the return to be an array of photo names", function () {
        expect(imageHelper_1.default.getPhotos("photos")).toBeInstanceOf(Array);
    });
});
describe("simple test for getting list of photos", function () {
    it("expect the return to be an array of photo names", function () {
        expect(imageHelper_1.default.getPhotos("photos").includes("fjord.jpg")).toBeTrue;
    });
});
describe("simple test for getting list of photos", function () {
    it("expect the return to be an array of photo names", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, imageHelper_1.default.getPhotoPath("fjord", "400", "400")];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual(path_1.default.resolve("./resizedPhotos/fjord400400.png"));
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("simple test for getting list of photos", function () {
    it("expect the return to be an array of photo names", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, imageHelper_1.default.getPhotoPath("doesNotExist", "400", "400")];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual("-1");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("GET /photo/", function () {
    it("should respond string and 200", function (done) {
        supertest_1.default(index_1.default).get("/photo").expect(200).end(done);
    });
});
describe("GET /photo/list", function () {
    it("should respond with array of photos", function () {
        var _this = this;
        supertest_1.default(index_1.default).get("/photo/list").expect(200).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(Array.isArray(response.body)).toBeTruthy();
                return [2 /*return*/];
            });
        }); });
    });
});
describe("GET /photo/cache", function () {
    it("should respond with array of photos in cache", function () {
        var _this = this;
        supertest_1.default(index_1.default).get("/photo/cache").expect(200).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(Array.isArray(response.body)).toBeTruthy();
                return [2 /*return*/];
            });
        }); });
    });
});
describe("GET /photo//photo/fjord?height=100&width=100", function () {
    it("should respond with a photo", function () {
        supertest_1.default(index_1.default).get("/photo/fjord?height=100&width=100").expect(200).end();
    });
});
