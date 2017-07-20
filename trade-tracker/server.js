const feathers = require('feathers');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const memory = require('feathers-memory');
const bodyParser = require('body-parser');
const handler = require('feathers-errors/handler');

// A Feathers app is the same as an Exnpm install -g feathers-clipress app
const app = feathers();

// Add REST API support
app.configure(rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
// Parse HTTP JSON bodies
app.use(bodyParser.json());
// Parse URL-encoded params
app.use(bodyParser.urlencoded({ extended: true }));
// Register our memory "messages" service
app.use('/messages', memory());
// Register a nicer error handler than the default Express one
app.use(handler());
// Start the server
app.listen(3300);
