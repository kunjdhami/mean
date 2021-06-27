const express = require('express');

const app = express(); //return express app which is a big chainof middlewares we apply to incoming requests

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
