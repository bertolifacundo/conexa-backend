const express = require('express');
require('dotenv').config()

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.routes()
    }

    routes() {
        this.app.get('/', function (req, res) {
            res.send('Hello World')
          })
    }

    listen(){
        
    this.app.listen(this.port,  () => {
    console.log(`server running on port ${this.port}`);
})
    }
}

module.exports = Server;