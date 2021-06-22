import supertest from "supertest";
import  photoHelper  from "../Routes/Image/imageHelper"
import  server  from "../index"
import path from "path";
//import { application } from "express";


describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', () => {
    expect(photoHelper.getPhotos("photos")).toBeInstanceOf(Array);
  });
});

describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', () => {
    expect(photoHelper.getPhotos("photos").includes("fjord.jpg")).toBeTrue;
  });
});

describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', async () => {
    const result = await photoHelper.getPhotoPath("fjord", "400", "400");
    expect(result).toEqual(path.resolve("./resizedPhotos/fjord400400.png"));
  });
});

describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names',async () => {
    const result = await photoHelper.getPhotoPath("doesNotExist", "400", "400");
    expect((result)).toEqual("-1");
  });
});

describe('GET /photo/', function () {
  it('should respond with json', function (done) {
    supertest(server)
      .get('/photos')
      .expect(200)
      .end(done);
  });
});


