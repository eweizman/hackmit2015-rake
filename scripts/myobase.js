function setup() {
	alert("this was called!");
	//var Myo = Myo;
	//alert("loading worked");

	//Start talking with Myo Connect
	Myo.connect();
	Myo.on('connected', function() {
		debugger
		console.log("connected successfully!!");
		this.vibrate();
	});

	Myo.on('pose', function(myo, data){
		debugger
    	console.log('Hello Myo!');
    	this.vibrate();
	});
}
