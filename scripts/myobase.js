function setup() {
	alert("this was called!");
	var Myo = require('myo');
	alert("loading worked");

	//Start talking with Myo Connect
	Myo.connect();

	Myo.on('fist', function(){
    	console.log('Hello Myo!');
    	this.vibrate();
	});
}
