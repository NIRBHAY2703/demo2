var express=require("express");
var app=express();

var p=function(req,res)
{
	
	var customer=[
	{name:"satish",rollno:1111},
	{name:"ram",rollno:113},
	{name:"sham",rollno:1114},
	{name:"rohan",rollno:1115},
	];
	res.send(customer);
};

app.get('/customer',p);

var server=app.listen(8080,function()
{
   var host=server.address().address
   var port=server.address().port

});