var net = require('net'),
	socket = net.connect({ port: 1337, host: 'localhost' });

socket.on('connect', function () {
	console.log('lets say hi');
	socket.write('hi \r\n');
	setInterval(function(){
		socket.write('and again\r\n');
	},3000);
});