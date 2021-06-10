const express = require('express');

const app = express();
const port = 3000;

require('./src/controllers/test-controller.js')(app);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));