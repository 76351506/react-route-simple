const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

module.exports.query = ($sql, $opt, callback) => {
    connection.connect();
    console.log($sql, $opt);
    connection.query($sql, $opt, function(error, results) {
        if (error) {
            callback(error);
        } else {
            callback(null, results)
        }
    });
}