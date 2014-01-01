var net = require('net'),
	port = 1337;

net.createServer(function(socket){
	console.log('Socket connect!');

	socket.on('data', function(data){
		console.log('We have some data: %s', data);
		console.log(data.toString('utf8'));
		if (data.toString('utf8') == 'whats your name'){
			
			socket.write('some name','utf8');
			console.log('y');
		}
		else
			console.log('n');
	
	});

	socket.on('end', function(){
		console.log('end');
	});

	socket.on('close', function(){
		console.log('close');
	});

	socket.on('error', function(e){
		console.log('error: %s', e);
	});

	socket.pipe(socket);
}).listen(port);

