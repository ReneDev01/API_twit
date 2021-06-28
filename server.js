//imports

let express = require("express");

//instaiate server
const  server = express();

//config route
server.get('/', (req, res)=>
    {
        res.setHeader('Content-Type', 'text/html');    
        res.status(200).send('<h1> Hello server </h1>');
    });

//launch server

server.listen(5500, ()=>
    {
        console.log('Server work full')
    });