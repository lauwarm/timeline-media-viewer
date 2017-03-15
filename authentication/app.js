var express           =     require('express')
  , passport          =     require('passport')
  , util              =     require('util')
  , TwitterStrategy   =     require('passport-twitter').Strategy
  , TumblrStrategy    =     require('passport-tumblr').Strategy
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
    localStorage.setItem('oauth-consumer-key-twitter', config.oauthSettings.twitter.consumerKey);
    localStorage.setItem('oauth-consumer-secret-twitter', config.oauthSettings.twitter.consumerSecret);

    process.nextTick(function () {
      return done(null, profile);
    });
  }));

// Use the TumblrStrategy within Passport
passport.use(new TumblrStrategy( {
  consumerKey: config.oauthSettings.tumblr.consumerKey,
  consumerSecret: config.oauthSettings.tumblr.consumerSecret,
  callbackURL: config.oauthSettings.tumblr.callback_url
},
  function(token, tokenSecret, profile, done) {
    localStorage.setItem('oauth-access-token-tumblr', token);
    localStorage.setItem('oauth-access-token-secret-tumblr', tokenSecret);
    localStorage.setItem('oauth-consumer-key-tumblr', config.oauthSettings.tumblr.consumerKey);
    localStorage.setItem('oauth-consumer-secret-tumblr', config.oauthSettings.tumblr.consumerSecret);

    process.nextTick(function() {
      return done(null, profile);
    });
  }));

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
  res.render('index');
});

app.get('/success', function(req, res) {
  res.render('success');
});

app.get('/error', function(req, res) {
  res.render('error');
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
  passport.authenticate('twitter', { successRedirect : '/success', failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/');
  });

// tumblr stuff
app.get('/auth/tumblr', passport.authenticate('tumblr'));

app.get ('/auth/tumblr/callback',
  passport.authenticate('tumblr', { successRedirect : '/success', failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/');
  });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

app.listen(3000);
