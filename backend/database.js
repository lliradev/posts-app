const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/postdb', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to database');
});