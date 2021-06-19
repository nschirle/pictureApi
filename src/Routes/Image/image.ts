import express from "express";
import fs from "fs";

const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("image main");
});

// About page route.
router.get("/photo/", function (req, res) {
  //let name = req.params.name;
  fs.readFile("./photos/192.jpg", function (err, data) {
    if (err) {
      throw err;
    }
    res.sendFile("C:/repo/pictureApi/photos/192.jpg");
  });
});

export default router;
