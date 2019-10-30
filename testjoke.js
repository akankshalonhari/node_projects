const request = require('request');

URL = 'https://official-joke-api.appspot.com/jokes/ten';
console.log(JSON.stringify(URL));

const getJoke = (callback) => {
	request(URL, { json : true},  (err, res, body) => {
		if(err){
			console.log(" Err -> ");
			console.log(JSON.stringify(err));
			return callback(err);
		}
		return callback(JSON.stringify(body));	
	});
}

module.exports.callJoke = getJoke;
