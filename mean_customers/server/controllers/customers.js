var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function(){
	return{
		show: function(req,res){
		Customer.find({},function(err,results){
			if(err){
				console.log(err);
			} else{
				res.json(results);
			}
		})	
		},
		post: function(req,res){
			console.log("hello add customer...", req.body.name, req.body.created_at);
		Customer.create(req.body,function(hello,results){
			if(hello){
				console.log(hello);
			} else{
//				res.json(results);
				module.exports.show(req,res); //helps with the request
			}
		});
		},
		delete: function(req,res){
			console.log('test delete',req.body._id);
		Customer.delete({_id:req.body._id}, function(err){
			if(err){
				console.log('can\'t remove from DB');
			}else{
				console.log('successfully removed from DB');
				module.exports.show(req,res);
			}
		})
		}
	};
})();