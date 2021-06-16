import express from 'express';

var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('image main');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;
