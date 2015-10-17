var cylon = require('cylon');
var socket = require('socket.io-client')
    .connect('http://RicohSpeak.azurewebsites.net');

    //work on a real device
/*
cylon.robot({
    name: 'edison',
    connections: { edison: { adaptor: 'intel-iot' } },
    devices: { printer: { driver: 'direct-pin', pin: 2 } },
    work: function (edison) {
        socket.emit('setTarget');
        socket.on('command', function (cmd) {
            edison.printer.digitalWrite(1);
            setTimeout(function () { edison.printer.digitalWrite(0); }, 2000);
        })
    }
}).start();
*/