
// Does not work in this format of API calling

var https = require('https');

function getJSON(options, callback){
	console.log(" Entered function ");
	https.request( options, function(res) {
		var body = '';
		
		res.on('data', function(chunk){
			body = body + chunk;
		});	
		
		console.log(" Body-> " + JSON.stringify(body));
		res.on('end', function(){
			var result = JSON.parse(body);
			callback(null, result);
		})
		res.on('error', callback);	
	})
	.on('error', callback)	
	.end();
}

var options = {
	host : 'api-sandbox.oanda.com',
	port : 80,
	path : '/v1/quote?instruments=USD_ZAR',
        method : 'GET'
};

getJSON(options, function(err, result){
	console.log(" Enter getJSON call ");
	if(err){
		return console.log('Error while trying to get price : ', err);
	}
	console.log(" Exit getJSON call ");	
});

