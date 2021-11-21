var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 
var mongoose = require('mongoose');
var pens = require("./models/pens");



passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  } 
));

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// server start
async function recreateDB() {
  // Delete everything
  await pens.deleteMany();
  let instance1 = new
  pens({
    pens_name: "Parker",
    penstype: "fountain",
    cost: 119.99
  });
  let instance2 = new
  pens({
    pens_name: "Reynolds",
    penstype : "fountain",
    cost: 19.99
  });
  let instance3 = new
  pens({
    pens_name:"cello",
    penstype: "ball",
    cost: 29.99
  });  
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}


// We can seed the collection if needed on

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pensRouter = require('./routes/pens');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

  app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
  }));
app.use(passport.initialize()); 
app.use(passport.session()); 
    
  



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pens', pensRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/', resourceRouter);
// passport config 
// Use the existing connection 
// The Account model  
var Account =require('./models/account'); 
 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 

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

var express = require('express'); 
var passport = require('passport'); 
var router = express.Router(); 
var Account = require('../models/Account'); 
 
router.get('/', function (req, res) { 
    res.render('index', { title: 'pens App', user : req.user }); 
}); 
 
router.get('/register', function(req, res) { 
    res.render('register', { title: 'pens App Registration'}); 
}); 
 
router.post('/register', function(req, res) { 
  Account.findOne({ username : req.body.username },  
    function(err, user) { 
      if(err) { 
        return res.render('register', { title: 'Registration',  
                  message: 'Registration error', account : req.body.username }) 
      } 
      if(user == {} ){ 
        return res.render('register', { title: 'Registration',  
                   message: 'Existing User', account : req.body.username }) 
      } 
      let newAccount = new Account({ username : req.body.username }); 
      Account.register(newAccount, req.body.password, function(err, user){ 
        if (err) { 
          return res.render('register', { title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        } 
        if(!user){ 
          return res.render('register',{ title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        }  
        console.log('Sucess, redirect'); 
        res.redirect('/'); 
      }) 
    })    
  }) 
  
router.get('/login', function(req, res) { 
    res.render('login', { title: 'pens App Login', user : req.user }); 
}); 
 
router.post('/login', passport.authenticate('local'), function(req, res) { 
    res.redirect('/'); 
}); 
 
router.get('/logout', function(req, res) { 
    req.logout(); 
    res.redirect('/'); 
}); 
 
router.get('/ping', function(req, res){ 
    res.status(200).send("pong!"); 
}); 
 
module.exports = router; 