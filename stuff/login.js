const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true }, function (err) {
    if (err) throw err; // Handle failed connection
    console.log('conn ready:  '+mongoose.connection.readyState);

});


var schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var userSchema = new schema({
    name: String,
    email: String,
    pass: String,
});

var User = mongoose.model('User', userSchema)

module.exports = User
