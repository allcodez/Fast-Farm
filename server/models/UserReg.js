const mongoose = require("mongoose")
const UserRegSchema = new mongoose.Schema({
	userName:{
		type:String,
		required:true,
	},
	userEmail:{
		type:String,
		unique:true,
		required:true,
	},
	userPhone:{
		type:String,
		required:true,
	},
	userPassword:{
		type:String,
		required:true,
	},
	isadmin:{
		type:Boolean,
		default:false
	}
},{timestamps:true});
const UserReg = mongoose.model('user',UserRegSchema);
module.exports=UserReg;