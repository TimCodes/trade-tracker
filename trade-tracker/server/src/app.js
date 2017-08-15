const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const middleware = require('./middleware');
blah
const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');

const services = require('./services');
const appHooks = require('./app.hooks');


const errorHandler = require('feathers-errors/handler');
const app = feathers();

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
// Host the public folder
app.use('/', feathers.static(app.get('public')));

  // Connect to the db, create and register a Feathers service.
MongoClient.connect('mongodb://localhost:27017/feathers')
    .then(function(db){
    // Connect to the db, create and register a Feathers service.
    app.use('/messages', service({
        Model: db.collection('messages'),
        paginate: {
        default: 2,
        max: 4
        }
    }));

     // A basic error handler, just like Express
  app.use(errorHandler());

  // Create a dummy Message
  app.service('messages').create({
    text: 'Message created on server'
  }).then(message => console.log('Created message', message));
})   

 

// Set up Plugins and providers
app.configure(hooks());
app.configure(rest());
app.configure(socketio());

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;
