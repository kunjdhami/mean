// express app

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //return express app which is a big chainof middlewares we apply to incoming requests

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
  const post = req.body;
  console.log('buhaha ',post);
  res.status(201).json({
    message: 'Post added sccssflly'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "ugy1i21",
      title: "First server post",
      content: "coming from server"
    },
    {
      id: "sadf3423",
      title: "2nd server post",
      content: "coming from server again"
    }
  ];
  res.status(200).json({
    message: 'posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
