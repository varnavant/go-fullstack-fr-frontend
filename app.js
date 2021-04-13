const express = require('express');

const app = express();

app.use((request, response, next) => {
   console.log('got request !');
   next();
});

app.use((request, response, next) => {
   response.status(201);
   next();
});

app.use((req, res, next) => {
    res.json({ message: 'got request !' });
    next();
});

app.use((req, res, next) => {
    console.log('response sended');
});


module.exports = app;
