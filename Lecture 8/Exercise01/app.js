var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
const insertLocationRouter = require('./routes/insertLocation');
const searchRouter = require('./routes/search');

const mongoClient = require('mongodb').MongoClient;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('./public/stylesheets'));
app.use('/js',express.static('./public/javascripts'));

let db;
app.use((req, res, next) => {
  mongoClient.connect("mongodb://root:rupenman@ds241699.mlab.com:41699/lecture08", (err, client) => {
    if (err) throw err;
    db= client.db('lecture08');
    req.db = db;
    return next();
  });
});

app.use('/insertLocation', insertLocationRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
