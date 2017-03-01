const express = require('express');

class CommentsController {
  constructor() {
    this.routes = express.Router();

    this.routes.get('/comments', this.getComments);
    this.routes.post('/comments', this.saveComment);
  }

  getComments(req, res) {
    let db = req.db;
    let collection = db.get("comments");

    collection.find({}, (err, docs) => {
      if (err) {
        return res.status(500).send(err)
      }

      res.send(docs);
    })
  }

  saveComment(req, res) {
    let comment = req.body.comment;
    let db = req.db;
    let collection = db.get("comments");

    collection.insert(comment, (err, doc) => {
      if (err) {
        return res.status(500).send(err)
      }

      res.send(doc);
    });
  }


}

module.exports = new CommentsController();
