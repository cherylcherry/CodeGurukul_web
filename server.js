var express = require('express'); //node_module for express server

var app = express();

app.set('views',__dirname+'/server/views'); //the folder to lookup
//__dirname (NOTE:double underscore) is a global variable and gives the absolute path of the folder
app.set('view engine','jade');

//app.use is used to use middlewares
app.use(express.static('public')); //static route handling

//Routes
app.get('/',function(req,res){
	res.render('index');
});
//req=request =>HTTP REQUEST object
//res=response =>HTTP RESPONSE object

app.listen(3020);
console.log("Express is listening at port 3020");