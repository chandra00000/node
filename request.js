var http = require('http');
var data = [
    { "name ": "chandan", "email ": "email@gmail.com", "pasword ": 979889 },
    { "name ": "chandan", "email ": "email@gmail.com", "pasword ": 979889 },
]
http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'application\json' })
    res.write(JSON.stringify(data));
    res.end();
}).listen(9999)