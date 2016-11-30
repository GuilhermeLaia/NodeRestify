module.exports = function(app) {

	var student = require('./controllers/studentController');	

	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
	});

	app.post('/createStudent', student.createStudent); //Create Student API
    app.get('/getStudent', student.getStudent);  // Get All Student Details API

};