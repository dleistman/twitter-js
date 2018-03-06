const express = require( 'express' );

const nunjucks = require( 'nunjucks');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const routes = require('./routes');

const app = express(); // creates an instance of an express application
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const server = app.listen(3000, () => console.log('server listening'));
const io = socketio.listen(server);

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes(io));

// app.use('/stylesheets/style.', function(req, res){
//   res.sendFile(__dirname + '/public')
// })

app.use(express.static(__dirname + '/public'));



// app.use('/special', (req, res, next) => {
//   console.log(req.method, req.path);
//   console.log('you found the special thing');
//   next();
// });

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


// app.get('/', (req, res, next) => {

//   res.render( 'index', {title: 'Hall of Fame', people: people} );

// });

