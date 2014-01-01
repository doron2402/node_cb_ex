var events = require('events'),
	eventEmitter = new events.EventEmitter(),
	fs = require('fs'); 

eventEmitter.on('closeDoor', function(files){
	console.log('door is close');
	if (files.length > 0)
	{
		for (var i = 0; i < files.length; i++) {
			console.log(i + ') file: %s', files[i]);
		};
	}
});

eventEmitter.on('doorOpen', function(){
	console.log('Door is open.');
	fs.readdir('./', function (err, files) {
		if (err) 
			console.log(err);

		console.log('files');

		eventEmitter.emit('closeDoor', files);
    });
	

});

 
eventEmitter.emit('doorOpen');