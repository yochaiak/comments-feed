const express = require('express');

class ViewController {
  constructor() {
    this.routes = express.Router();

    this.routes.get('/', this.index)
  }

  index(req, res) {
    res.render('index')
  }
}

module.exports = new ViewController();
