var http = require('http');
var data = `<center><H1>Demo Test</h1><br><br>
<span>Enter your name</span><br><br>
<input type='text'/> <br><br>
<span>Enter your email<br><br>
<input type = 'email' /><br><br>
<span > Enter your password </span><br><br>
<input type='pasword'/><br><br>
<input type='submit' /></center>`;
http.createServer(function(rq, rs) {
    rs.writeHead(200, { 'content-type': 'text/html' })
    rs.write(data);
    rs.end();
}).listen(2000);