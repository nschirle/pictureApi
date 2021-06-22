import express from "express";
import path from "path";
import photoHelper from "./imageHelper";
import fs from "fs";
//import fileupload, { UploadedFile } from "express-fileupload";
import multer from "multer";


const router = express.Router();


const upload = multer({dest: './photos/', 
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    
    }
  }
});

// health ping for API surface.
router.get("/", function (req, res) {
  console.log("Photo API is functioning");
  res.send("Photo API is functioning");
});

//gets photos that can be resized
router.get("/list", function (req, res) {
  res.send(photoHelper.getPhotos("photos"));
});

//gets all photos in cache
router.get("/cache", function (req, res) {
  res.send(photoHelper.getPhotos("resizedPhotos"));
});

router.post("/", upload.single("file"), function (req, res) {
  const photos = req.file
  if(!req.file){
    res.status(400).send("no photo attached")
  }
  const original = photos?.originalname;
  fs.rename("./photos/" + photos?.filename, "./photos/" + original, function(err) {
    if(err){
      res.send(err);
    }
    res.status(200).send( "photo uploaded" );
  });
  
});

// return photo of specfic size.
router.get("/:name",  async  (req, res) => {
  const name = req.params.name;
  const width = String(req.query.width);
  const height = String(req.query.height);
  console.log("received");
  const photoPath = await photoHelper.getPhotoPath(name, height, width);
  if (photoPath == "-1"){
    res
      .status(404)
      .send("please request a valid image name")
  }
  else{
    res
      .status(200)
      .sendFile(path.resolve(photoPath)
      );
  }
  
});

export default router;
