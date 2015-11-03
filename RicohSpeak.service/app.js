var http = require('http');
var app = require('express')();

var targetSocket;

app.set('port', process.env.PORT);


app.get('/api/command', function (req, res) {
   
    if (targetSocket) {

        // if there is a socket connected fire to the socket broadcast
        targetSocket.emit('command', req.query.cmd);
    }

    // execute the command ourself
    executeCommand(req.query.cmd);
  
});

module.exports = app;

var server = http.createServer(app).listen(app.get('port'));

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('connection from client ' + socket.id);
    socket.on('setTarget', function () {
        console.log('Setting ' + socket.id + ' as target...');
        targetSocket = socket
    });
});

function executeCommand(cmd) {
    var strCommand = cmd.toString().toUpperCase();
    var strContent = "";

    if (strCommand = "LOAD") {

        //Insert API Call Here!
        strContent = cmd.toString();

    } else if (strCommand = "CLEAR") {

        //Insert API Call Here!
        strContent = cmd.toString();

    } else {

        strContent = "Sorry, I didn't understand...please try again!";

    }
    console.log('Received content: ' + strContent);
}