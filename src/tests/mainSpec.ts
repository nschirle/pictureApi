import  photoHelper  from "../Routes/Image/imageHelper"
import path from "path";
describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', () => {
    expect(photoHelper.getPhotos()).toBeInstanceOf(Array);
  });
});

describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', () => {
    expect(photoHelper.getPhotos().includes("fjord.jpg")).toBeTrue;
  });
});

describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', () => {
    expect(photoHelper.getPhotoPath("fjord", "400", "400").then).toBeTruthy(path.resolve("./resizedPhotos/fjord400400.png"));
  });
});

describe("simple test for getting list of photos", () => {
  it('expect the return to be an array of photo names', () => {
    expect(photoHelper.getPhotoPath("doesNotExist", "400", "400").then).toEqual("-1");
  });
});