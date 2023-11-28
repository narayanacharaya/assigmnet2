
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller'); 
const app = express();
const port = 3000;
// i used middleware for  json 
app.use(bodyParser.json());
 
app.post('/', controller.checkWordCount);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
