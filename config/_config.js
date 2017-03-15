var oauthSettings = {
  twitter: {
    consumerKey: '',
    consumerSecret: '',
    callback_url: 'http://localhost:3000/auth/twitter/callback'
  },
  tumblr: {
    consumerKey: '',
    consumerSecret: '',
    callback_url: 'http://localhost:3000/auth/tumblr/callback'
  },
  instagram: {
    consumerKey: '',
    consumerSecret: '',
    callback_url: 'http://localhost:3000/auth/instagram/callback'
  }
};

module.exports = {
  oauthSettings: oauthSettings
};
