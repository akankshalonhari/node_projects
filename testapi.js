
const https = require('https');

URL = 'https://jsonplaceholder.typicode.com/todos/1';

const testapi = (callback) => {
	https.get(URL, (resp) => {
		let data = '';
		
		//a chunk of data has been received
		resp.on('data', (chunk) => {
 			console.log(" Data " + JSON.stringify(chunk));	
			data = data + chunk} 
		);

		//whole response is received, print out the results
		resp.on('end', () => {	
			console.log(" Response " + JSON.stringify(data));
			return callback(data);	
		});
		
	}).on('error', (err) => {	console.log(" Error: " + err.message);	});
}

module.exports.callTestApi = testapi;
