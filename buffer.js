var b = new Buffer("123");
console.log(b);

var c = new Buffer(123);
console.log(c);

c.writeInt32LE(123,0);
console.log(c);
console.log(c.length);

var d = new Buffer(4);

d.writeInt32LE(123123123, 0);
console.log(d.length);
console.log(d);