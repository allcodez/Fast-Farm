const mongoose = require("mongoose")
const MycartSchema = new mongoose.Schema({
	UserId:{
		type:String,
		required:true,
	},
	ProductImage:{
		type:String,
		required:true,
	},
	ProductName:{
		type:String,
		unique:true,
		required:true,
	},
	Product_Category:{
		type:String,
		required:true,
	},
	Price:{
		type:String,
		required:true,
	},

	Oprice:{
		type:String,
		required:true,
	},
});
const Mycart = mongoose.model('cart',MycartSchema);
module.exports=Mycart;