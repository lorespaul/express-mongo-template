const express = require('express');
const connector = require('./src/connector/mongo-connector');

const server = {
    connector: connector(),
    app: express(),
    port: 3000,
    repositories: {}
};

require('./src/repositories')(server)
require('./src/controllers')(server);

server.app.listen(server.port, () => console.log(`Test mongo app listening on port ${server.port}!`));