const express = require('express');
const router = express.Router()
const mysql = require('mysql');
const app = express();

const axios = require('axios');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //my username
    user: "root",
    password: 'Applejuice18',
    database: "bank_account"

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
    connection.end();
});

const afterConnection = () => {
    // connect to your database
    connection.query("SELECT email FROM users", function (err, res) {
        for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
    })
}
    
axios.get('http://localhost:3000/register')
.then(res => console.log('another ' + res))
.catch(err => console.log(err.data))

router.post("/register", (req, res) => {
    console.log('Tester ' + req.body)
    
    res.json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }]);
});    

const url = 'http://localhost:3000/register';


module.exports = router;