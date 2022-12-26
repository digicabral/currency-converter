const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const convertRouter = require('./routes/convert');
const transactionsRouter = require('./routes/transactions');

(async () => {
  const database = require('./db');

  try {
      const result = await database.sync();
      console.log('App started successfully');
  } catch (error) {
      console.log(error);
  }
})();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const whitelist = [process.env.DOMAIN]

const corsOptions = {
  origin: function(origin, callback){
    	    if(whitelist.indexOf(origin) !== -1){
            		callback(null, true)
          } 
          else{
            		callback(new Error('Not Allowed By CORS'))
            	}
          }
}
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users',usersRouter);
app.use('/convert', convertRouter);
app.use('/transactions', transactionsRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
