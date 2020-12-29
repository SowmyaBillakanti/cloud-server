'use strict';

const express = require('express');
const app = express();

// Middleware
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const animalRoutes = require('./routes/animal-routes');
const cookiesRoutes = require('./routes/cookies-routes');


app.use(express.json());
app.use(animalRoutes);
app.use(cookiesRoutes);

app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
    server: app,
    start: port => {
        if(!port) {throw new Error('missing port');}
        app.listen(port, () => {
            console.log(`listening on ${port}`);
        })
    }
}