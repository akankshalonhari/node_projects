const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const callApi = require('./testapi')
const apiCallJoke = require('./testjoke')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        } else if(req.url === "/node"){ 
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        } else if(req.url === "/api"){
	    console.log(" In /api ");
	    callApi.callTestApi(function(response){
	    	res.write(response);
		res.end();	
	    }); 	
	} else if(req.url === "/joke"){
	    console.log(" In /joke ");
	    apiCallJoke.callJoke(function(response){
		res.write(response);
		res.end();
	    });
	}
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");
