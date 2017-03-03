
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// var index = require('./routes/index_B');

var flow = require('./routes/flow');

var poses = require('./routes/poses');

var noviceplay = require('./routes/noviceplay');
var yogiplay = require('./routes/yogiplay');

var settings = require('./routes/settings');

var login = require('./routes/login');

var profile = require('./routes/profile');

var help = require('./routes/help');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/index', index.view);
app.get('/index_B', index.viewB);
app.get('/flow', flow.view);
app.get('/poses', poses.view);
app.get('/noviceplay', noviceplay.view);
app.get('/yogiplay', yogiplay.view);
app.get('/settings', settings.view);
app.get('/' , login.view);
app.get('/profile/:time', index.changeTime);
app.get('/help', help.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
