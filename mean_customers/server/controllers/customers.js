var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
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
		Customer.create(req.body,function(hello,results){
			if(hello){
				console.log(hello);
			} else{
				res.json(results);
			}
		});
		}
	};
})();