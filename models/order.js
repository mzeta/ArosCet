var mongoose = require('mongoose');
  
//order schema
var orderSchema = mongoose.Schema({

  order_id:{
      type: Number,
      required: true 
  },
  
  title:{
      type: String,
      required: true 
  },

  description:{ 
      type: String,
      required: false 
  },

  customer_id:{ 
      type: Number,
      required: true 
  },

   customer_name:{ 
      type: String,
      required: true 
  },

 user_name:{ 
      type: String,
      required: true 
  },

  quoute_id:{ 
      type: Number,
      required: true 
  },
  
  create_date:{
    type: Date,
    default: Date.now
  }

});

var Order = module.exports = mongoose.model('Order', orderSchema);

//GET ORDERS
module.exports.getOrders = function(callback, limit){
  Order.find(callback).limit(limit);
}

//GET ORDERS BY ID
module.exports.getOrdersById = function(id, callback){
  Order.findById(id,callback);
}

//CREATE ORDER
module.exports.addOrders = function(order, callback){
  Order.create(order, callback);
}

//DELETE ORDER BY ID
module.exports.removeOrdersById = function(id, callback){
  var query = {_id: id};
  Order.remove(query, callback);
}



