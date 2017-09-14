const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'pass',
    database: 'mydb'
});

conn.connect(function (err) {
    if (err) throw err;
    console.log('Connected')
    var sql = "CREATE TABLE users (name VARCHAR(255), company VARCHAR(255), title VARCHAR(255))"

app.post('/', function (req, res) {
    console.log(req.body.username);

})


app.post('/register', function (req, res) {
    console.log(req.body)

    conn.connect(function (err) {
        if (err) throw err;
        console.log('Connected')
        var sql = "INSERT INTO users (name, company, title) VALUES " + (req.body.username, req.body.company, req.body.title );

        res.send('Done')
    })
})

app.listen(8081)