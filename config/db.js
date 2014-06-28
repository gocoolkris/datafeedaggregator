module.exports =  {
 url: 'mongodb://localhost/test'
}


var mongoose = require('mongoose');
var uri = 'mongodb://localhost/mobile_devices';
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});

db.once('open', function callback() {
 console.log('yay!');
});


var productinfoSchema = mongoose.Schema({productType:String, productName:String, volume:Number, itemPrice:Number});

var productinfoModel = mongoose.model('productinfo', productinfoSchema, 'productinfo');

//var p = new productinfoModel({'productType':'Nexus', 'productName':'nexus5', 'volume':10, 'itemPrice':200});

//p.save();

var fetchcollection = productinfoModel.find(function(err, products){

if(!err) console.log(products);

});

var aggregatebyproductname = function() {


   productinfoModel.aggregate([
   {
    $group: {_id : {"$productType", "$productName"},
             volume :  {$sum : "$volume" },
             itemPrice : { $avg : "$itemPrice"}
	    }
   }
    
] , function(err, result) {

     if(err) console.log(err);
     else console.log(result);

   })};


aggregatebyproductname();

