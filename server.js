var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');
var path = require('path')

User = require('./models/user');
Order = require('./models/order');


//DB Connection
mongoose.connect('mongodb://localhost/taskmanager');
var db = mongoose.connection;
console.log('Connected to DB');

//Middlewares

app.use(bodyParser.json());
app.use('/static',express.static(path.join(__dirname, './public')))

//Routes

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, './public/index.html'));
});


//USUARIOS

app.get('/api/v1/users', function(req,res){
	User.getUsers(function(err, users){
		if(err){
			throw err;
	}	
	res.json(users);
	});
});


app.post('/api/v1/users', function(req,res){
	var user = req.body;
	User.addUsers(user, function(err, user){
		if(err){
			throw err;
	}	
	res.json(user);
	});
});


//ORDEN

app.get('/api/v1/orders', function(req,res){
	Order.getOrders(function(err, orders){
		if(err){
			throw err;
	}	
	res.json(orders);
	});
});


app.get('/api/v1/orders/:_id', function(req,res){
	Order.getOrdersById(req.params._id, function(err, order){
		if(err){
			throw err;
	}	
	res.json(order);
	});
});

app.post('/api/v1/orders', function(req,res){
	console.log(req.body);
	var order = req.body;
	Order.addOrders(order, function(err, order){
		if(err){
			throw err;
	}	
	res.json(order);
	});
});

app.delete('/api/v1/orders/:_id', function(req,res){
	console.log("Eliminando el registro:  " + req.params._id);
	var id = req.params._id;
	Order.removeOrdersById(id, function(err, order){
		if(err){
			throw err;
		}
		res.json(order);
	});

});


//Start server
  const port=3000;
  app.listen(port, function() {
  	console.log("Node server running on http://localhost: " + port);
  });

