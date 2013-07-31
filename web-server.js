var http = require('http');

http.createServer(function(request, response) {
        response.writeHead(200);
            response.write("Hello");
                setTimeout(function(){
                            response.end("World");
                                }, 5000);
}).listen(8080);
