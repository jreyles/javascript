var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		show: function(req,res){
		Order.find({},function(err,results){
			if(err){
				console.log(err);
			} else{
				res.json(results);
			}

		})	
		},
		post: function(req,res){
		Order.create(req.body,function(hello,results){
			if(hello){
				console.log(hello);
			} else{
				res.json(results);
			}
		});
		}
	};
})();