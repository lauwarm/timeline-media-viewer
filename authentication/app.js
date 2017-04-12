var express           =     require('express')
  , passport          =     require('passport')
  , util              =     require('util')
  , TwitterStrategy   =     require('passport-twitter').Strategy
  , session           =     require('express-session')
  , cookieParser      =     require('cookie-parser')
  , bodyParser        =     require('body-parser')
  , config            =     require('../config/_config.js')
  , app = express();

var __dirname = "./authentication";

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the TwitterStrategy within Passport.
passport.use(new TwitterStrategy({
  consumerKey: config.oauthSettings.twitter.consumerKey,
  consumerSecret: config.oauthSettings.twitter.consumerSecret ,
  callbackURL: config.oauthSettings.twitter.callback_url
},
  function(token, tokenSecret, profile, done) {
    localStorage.setItem('oauth-access-token-twitter', token);
    localStorage.setItem('oauth-access-token-secret-twitter', tokenSecret);
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/css'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', key: 'sid'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/logout', function(req, res){
  req.logout();
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

// twitter stuff
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect : '/', failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// tumblr stuff

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

app.listen(3000);
