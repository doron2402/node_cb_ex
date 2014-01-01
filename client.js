/*
	you really want to run this command

	node client.js towel.blinkenlights.nl 23
*/
var net = require('net'),
	host = process.argv[2],
	port = Number(process.argv[3]),
	socket = net.connect(port, host);

socket.on('connect', function(){
	process.stdin.pipe(socket);
	socket.pipe(process.stdout);
	//process.stdin.resume();
});

socket.on('end', function(){
	process.stdin.pause();
});