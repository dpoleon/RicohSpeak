var cylon = require('cylon');
var socket = require('socket.io-client')
    .connect('http://RicohSpeak.azurewebsites.net');

/*Test code*/

console.log("Requesting to be target...");
socket.emit('setTarget');
console.log("Waiting for content...");
socket.on('command', function (cmd) {
    var strCommand = cmd.toString().toUpperCase();
    var strLength = cmd.toString().length;
    var strContent = "";
    var intCommandPosition = 0;

    if (strCommand.search("PRINT") > -1) {

        intCommandPosition = strCommand.search("PRINT");
        intCommandPosition = intCommandPosition + 6;
        strContent = cmd.toString().substring(intCommandPosition, strLength);

    } else if (strCommand.search("COPY") > -1) {

        intCommandPosition = strCommand.search("COPY");
        intCommandPosition = intCommandPosition + 5;
        strContent = cmd.toString().substring(intCommandPosition, strLength);

    } else if (strCommand.search("SCAN") > -1) {

        intCommandPosition = strCommand.search("SCAN");
        intCommandPosition = intCommandPosition + 5;
        strContent = "Sorry, I don't know how to scan!";

    } else {

        strContent = "Sorry, I didn't understand...please try again!";

    }
    console.log('Received content: ' + strContent);
})

/*work on a real device

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