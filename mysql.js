var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rpp'
});

con.connect(function(error) {
    if (error) throw error;
    console.log('connect');
    con.query('SELECT * FROM offer_ambassador', function(err, res) {
        if (err) throw err;
        console.log(res);
    })
});