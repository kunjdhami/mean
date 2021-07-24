// express app

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/posts');

const app = express(); //return express app which is a big chainof middlewares we apply to incoming requests

mongoose.connect("mongodb+srv://max:kunjdhami26@cluster0.ucekb.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to db');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  )
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    console.log('from backend on add new post', createdPost);
    res.status(201).json({
      message: 'Post added sccssflly',
      postId: createdPost._id
    });
  }); //insert to db
  console.log('came from backend ', post);
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    console.log('documents from app js', documents);
    res.status(200).json({
      message: 'posts fetched successfully',
      posts: documents
    });
  });
});

app.delete('/api/posts/:id', (req, res, next) => {
  console.log('id came from frontend and this is from backend ',req.params.id);
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log('result from deletion in backend ',result);
    res.status(200).json({ message: 'Post Deleted' });
  })
});

module.exports = app;


//mongo pass: L7zBEbbN7aAkpsU
