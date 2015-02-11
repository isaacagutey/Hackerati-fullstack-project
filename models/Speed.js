var mongoose = require('mongoose');

var SpeedSchema = new mongoose.Schema({
	velocity: Number,
	time: Number
});

mongoose.model('Speed', SpeedSchema);

