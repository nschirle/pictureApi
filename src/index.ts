import express from 'express';

const app = express();
const port = 3000;
const wiki = require('./Routes/Image/image');
// ...
app.use('/wiki', wiki);
app.get('/', (req, res) => {
    res.send('Hello Test World!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })