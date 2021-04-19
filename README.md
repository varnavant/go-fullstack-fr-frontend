# GoFullstackFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server
init the project `npm init`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

create a server with server.js file then run
`node server` on command line

to replace node server, you can install 
`npm install -g nodemon` then launch
`nodemon server` which will listen file 
and restart server if it has update

install framework express
`npm install --save express`

to use the framework express, you need to create a file app.js
and set up the var

<<<<<<< Updated upstream
add body parser to parse form
`npm install body-parser --save` 
=======
## set up mongo db
`npm install --save mongoose`

on app.js add
`const mongoose = require('mongoose');`

+ add these line to connect to the server (get the string connexion from mongo db atlas website after create a new cluster)
`mongoose.connect('mongodb+srv://varnavant:<password>@cluster0.j02zm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));`

## launch frontend
`node server`

## launch backend
`nodemon server`

##url 
http://localhost:4200/


## user auth
npm install --save mongoose-unique-validator
npm install --save bcrypt

## token
npm install --save jsonwebtoken

## implementation la gestion de fichier
npm install --save multer
>>>>>>> Stashed changes
