const express = require('express');
const app = express();
require('./database');
const postsRoutes = require('./routes/post.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, OPTIONS, DELETE'
  );
  next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;