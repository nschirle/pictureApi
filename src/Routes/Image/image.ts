import express from "express";
import path from "path";
import sharp from "sharp";
import getPhotos from "./imageHelper";
import fs from "fs";
const router = express.Router();

// list all photos in dir.
router.get("/", function (req, res) {
  res.send(getPhotos());
});

// return photo of specfic size.
router.get("/:name", function (req, res) {
  const name = req.params.name;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  if(fs.readdirSync("./resizedPhotos/").includes( name + height + width + ".png")){
    console.log("in the IF");
    res
      .status(200)
      .sendFile(path.resolve("./resizedPhotos/" + name + height + width + ".png"));
  }
  else {
    console.log(width);
    console.log(height);
    sharp("./photos/" + name + ".jpg")
      .resize({ width: width, height: height })
      .toFormat("png")
      .png({ quality: 100 })
      .toFile("./resizedPhotos/" + name + height + width + ".png");

    res
      .status(200)
      .sendFile(path.resolve("./resizedPhotos/" + name + height + width + ".png"));
  }
});

export default router;
