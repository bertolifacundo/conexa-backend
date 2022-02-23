const express = require('express');
const cors = require('cors');

const { dbConection } = require('../database/config');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || process.env.PORTLOCAL;
    this.userRoutes = '/api/users';
    this.postsRoutes = '/api/posts';
    this.authPath = '/api/auth';
    this.photosRoutes = '/api/photos';
    this.upConection();
    this.middlewares();
    this.routes();
  }

  async upConection() {
    await dbConection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.authPath, require('../routes/auth.routes'));
    this.app.use(this.userRoutes, require('../routes/user.routes'));
    this.app.use(this.postsRoutes, require('../routes/posts.routes'));
    this.app.use(this.photosRoutes, require('../routes/photos.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
