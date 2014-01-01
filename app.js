var function1 = function(args, next){
	console.log('function1');
	console.log(args);
	next(args);
}

var function2 = function(args){
	console.log('function2');
	console.log(args);
	console.log('done');
}

var starting = function(cb) {
 cb({step1: "first step"}, function2);
};

var sayHi = function(args, cb){
	console.log('say hi');
	
	cb(function1);
}

starting(function1);


sayHi('doron',starting);