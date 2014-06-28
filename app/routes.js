//app/routes.js

module.exports = function(app) {

   app.get('/', function(req, res) {
     //use mongoose to fetch the records from database

     res.sendfile('./public/views/index.html');

  });



};
