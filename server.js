var http = require('http')
var url = require('url')

function start (route, handle){
	function reqres(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log(pathname)

		route(handle, pathname)

		res.writeHead(200, {"Content-type" : "text/plain"});
		res.write("hello world");
		res.end();
}

http.createServer(reqres).listen(8888)
}
exports.start = start;

	