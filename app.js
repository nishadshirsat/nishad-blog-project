// var fs = require('fs');

// fs.readFile('./hello.txt', function (err, data) {
//     if (!err) {
//         console.log(data.toString());

//     }
// });

//creating server

// var http = require('http');
// var events = require('events');

// var eventEmitter = new events.EventEmitter();


// var server = http.createServer(function (req, res) {
//     eventEmitter.emit('someone requested', "Nishad Shirsat"); //event Trigger
//     res.end('server works!!');
// });

// eventEmitter.on('someone requested', function (data) {
//     console.log('request has been done on the server', data);

// }); // event listener

// server.listen(3000, 'localhost', function () {
//     console.log('server started on port:3000');

// });

//example of express

var express = require('express');
var mangoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var http = require('http');
var fs = require('fs');
var route = require('./routes/route');


var app = express();
var server = http.createServer(app);

//adding middleware
app.use(cors());

//connect to mongodb
mangoose.connect('mongodb://localhost:27017/postlist');
mangoose.connection.on('connected', function (err) {
    if (!err) {
        console.log('connected to mangodb successfully');

    } else {
        console.log('error connection with mangodb ' + err);

    }
});

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//add routes 
app.use('/api', route);

app.get('/', function (req, res) {
    res.send('<h2>Express is working</h2>');
});

app.get('/tasks', function (req, res) {
    fs.readFile('./db.json', function (err, data) {
        res.json(JSON.parse(data.toString()).tasks);

    });
});

server.listen(3000, function () {
    console.log('server listeneing');

});