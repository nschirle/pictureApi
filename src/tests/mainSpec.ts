import supertest from "supertest";
import photoHelper from "../Routes/Image/imageHelper";
import server from "../index";
import path from "path";
import { response } from "express";
//import { application } from "express";

supertest("http://localhost:5555");

describe("simple test for getting list of photos", () => {
  it("expect the return to be an array of photo names", () => {
    expect(photoHelper.getPhotos("photos")).toBeInstanceOf(Array);
  });
});

describe("simple test for getting list of photos", () => {
  it("expect the return to be an array of photo names", () => {
    expect(photoHelper.getPhotos("photos").includes("fjord.jpg")).toBeTrue;
  });
});

describe("simple test for getting list of photos", () => {
  it("expect the return to be an array of photo names", async () => {
    const result = await photoHelper.getPhotoPath("fjord", "400", "400");
    expect(result).toEqual(path.resolve("./resizedPhotos/fjord400400.png"));
  });
});

describe("simple test for getting list of photos", () => {
  it("expect the return to be an array of photo names", async () => {
    const result = await photoHelper.getPhotoPath("doesNotExist", "400", "400");
    expect(result).toEqual("-1");
  });
});

describe("GET /photo/", function () {
  it("should respond string and 200", function (done) {
    supertest(server).get("/photo").expect(200).end(done);
  });
});

describe("GET /photo/list", function () {
  it("should respond with array of photos", function () {
    supertest(server).get("/photo/list").expect(200).then(async (response) => {
    expect(Array.isArray(response.body)).toBeTruthy()
    });
  });
});

describe("GET /photo/cache", function () {
  it("should respond with array of photos in cache", function () {
    supertest(server).get("/photo/cache").expect(200).then(async (response) => {
    expect(Array.isArray(response.body)).toBeTruthy()
    });
  });
});

describe("GET /photo//photo/fjord?height=100&width=100", function () {
  it("should respond with a photo", function () {
    supertest(server).get("/photo/fjord?height=100&width=100").expect(200).end();
  });
});