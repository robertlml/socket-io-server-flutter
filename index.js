
    require('dotenv').config();
      
    const express = require('express');
       
    //App de Express
    const app = express();

    const path = require('path');
  
    //crear node server

    const server = require('http').createServer(app);
    // se importa el socket.io
    module.exports.io = require('socket.io')(server);
    require('./sockets/socket.js');
    
  
    //path publico

    const publicPath = path.resolve( __dirname, 'public');
    app.use( express.static(publicPath));

    server.listen( process.env.PORT, (err) => {
        if(err) throw new Error(err);

        console.log('Servidor corriendo en puerto !!' ,process.env.PORT);
    });
