import fs from "fs";
import sharp from "sharp";
import path from "path";
function getPhotos(): Array<string> {
  const files = fs.readdirSync("./photos/");
  return files;
}

async function getPhotoPath(name: string, height: string, width: string): Promise<string>{
  const Width = Number(width);
  const Height = Number(height);
  const fileNotFound = "-1";
  const originalPhotos = fs.readdirSync(path.resolve("./Photos/"));
  const resizedPhotos = fs.readdirSync(path.resolve("./resizedPhotos/"));
  if(resizedPhotos.includes(name + height + width + ".png")){
    return path.resolve("./resizedPhotos/" + name + height + width + ".png")
  }
  if(originalPhotos.includes(name + ".jpg")){
    sharp("./photos/" + name + ".jpg")
      .resize({ width: Width, height: Height })
      .toFormat("png")
      .png({ quality: 100 })
      .toFile("./resizedPhotos/" + name + height + width + ".png");
    
    return path.resolve("./resizedPhotos/" + name + height + width + ".png")
  }

  return fileNotFound;
}
export default{
  getPhotos,
  getPhotoPath
} 
