var net = require('net');

var sockets = [];

var server = net.createServer(function(socket){
    sockets.push(socket);
    socket.on('data',function(data){
        for(var i=0; i < sockets.length;i++){
            if (sockets[i] == socket) continue;
            sockets[i].write(data);
        }
    });
    socket.on('end',function(){
        var i = sockets.indexOf(socket);
        socket.splice(i,0);
    });
});

server.listen(8000);
