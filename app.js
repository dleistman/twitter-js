const express = require( 'express' );
const volleyball = require('volleyball');
const app = express(); // creates an instance of an express application

app.listen(3000, () => console.log('server listening'));

app.use(volleyball);

app.use('/special', (req, res, next) => {
  console.log(req.method, req.path);
  console.log('you found the special thing');
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello, world!');
});
