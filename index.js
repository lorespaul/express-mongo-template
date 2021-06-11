const express = require('express');
const connector = require('./src/connector/mongo-connector')();

const app = express();
const port = 3000;

require('./src/controllers')(app, connector);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));