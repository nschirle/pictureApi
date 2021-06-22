import fs from "fs";
import sharp from "sharp";
import path from "path";
function getPhotos(dir: string): Array<string> {
  const files = fs.readdirSync("./" + dir + "/");
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
    await sharp("./photos/" + name + ".jpg")
      .resize({ width: Width, height: Height })
      .toFormat("png")
      .png({ quality: 100 })
      .toFile("./resizedPhotos/" + name + height + width + ".png");
    
    return path.resolve("./resizedPhotos/" + name + height + width + ".png")
  }

  return fileNotFound;
}


/*async function uploadPhoto(name: string): Promise<string>{
  const photoPath =  fs.readdirSync(path.resolve("./Photos/"));
  fs.writeFileSync(photoPath + name + ".jpg");

}
*/


export default{
  getPhotos,
  getPhotoPath
} 
