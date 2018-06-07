require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)
const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});

//for errors on connection to DB
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

const UsersController = require('./Controller/users')
app.use('/api/users', UsersController)


const PhotosController = require('./Controller/photos')
app.use('/api/users/:userId/photos', PhotosController)

const WeighInController = require('./Controller/weighin')
app.use('/api/users/:userId/weight', WeighInController)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("You are connected to port " + PORT);
})
