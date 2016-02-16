var customers = require('../../server/controllers/customers.js');
var orders = require('../../server/controllers/orders.js');

module.exports = function(app){
	app.get('/customers', function(req,res){
		customers.show(req,res);
	});
	app.post('/addCustomer', function(req,res){
		customers.post(req,res);
	});
	app.delete('/customers/:id', function(req,res){
		customers.delete(req,res);
	});
	app.get('/orders', function(req,res){
		orders.show(req,res);
	})
	app.post('/addOrder',function(req,res){
		orders.post(req,res);
	});
	app.delete('/orders/:id',function(req,res){
		orders.delete(req,res);
	})
};

