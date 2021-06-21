import express from "express";
import path from "path";
import photoHelper from "./imageHelper";
const router = express.Router();

// list all photos in dir.
router.get("/", function (req, res) {
  res.send(photoHelper.getPhotos());
});

// return photo of specfic size.
router.get("/:name", async  (req, res) => {
  const name = req.params.name;
  const width = String(req.query.width);
  const height = String(req.query.height);
  const photoPath = await photoHelper.getPhotoPath(name, height, width);
  if (photoPath == "-1"){
    res
      .status(404)
      .send("please request a valid image")
  }
  else{
    res
      .status(200)
      .sendFile(path.resolve(photoPath)
      );
  }
});

export default router;
