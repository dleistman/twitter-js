const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {

  // io.on('connection', (socket) => {
  //   console.log(socket.id);
  //   socket.on('newTweet', (tweet) => {

  //   })
  // })

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    // io.sockets.emit('newTweet', { name, text });
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', (req, res) => {
    let name = req.params.name;
    let list = tweetBank.find( { name } );
    res.render('index', { tweets: list, showForm: true, showName: true })
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    console.log('in the post route!', { name, text }, 'io: ', io)
    res.redirect('/');
  });

  router.get('/tweets/:id', (req, res) => {
    let id = req.params.id;
    let list = tweetBank.find( { id } );
    console.log(id);
    res.render('index', { tweets: list })
  });

  return router;
}
