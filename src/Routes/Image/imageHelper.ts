import fs from "fs";

function getPhotos(): Array<string> {
  const files = fs.readdirSync("./photos/");

  return files;
}

export default getPhotos;
