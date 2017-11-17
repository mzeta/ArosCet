var mongoose = require('mongoose');
  
//user schema
var userSchema = mongoose.Schema({

  name:{
      type: String,
      required: true 
  },

  description:{ 
      type: String 
  },
  country:{ 
      type: String 
  },
  phonenumber:{ 
      type: Number 
  },
  type:{ 
      type: String
	},

  create_date:{
    type: Date,
    default: Date.now
  }

});

var User = module.exports = mongoose.model('User', userSchema);

//GET USERS
module.exports.getUsers = function(callback, limit){
  User.find(callback).limit(limit);
}

//ADD USERS
module.exports.addUsers = function(user, callback){
  User.create(user, callback);
}







