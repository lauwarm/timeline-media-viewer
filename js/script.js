try { var os = require('os'); } catch(e) { alert(e); }
try { var gui = require('nw.gui'); } catch(e) { alert(e); }
try { var config = require('./config/_config.js'); } catch(e) { alert(e); }
try { var localData = require('./js/module/localData.js'); } catch(e) { alert(e); process.exit(1); }
try { var server = require('./authentication/app.js'); } catch(e) { alert(e); process.exit(1); }
try { var view = require('./js/module/view.js'); } catch(e) { alert(e); process.exit(1); }
try { var div = require('./js/module/div.js'); } catch(e) { alert(e); process.exit(1); }
try { var listener = require('./js/module/listener.js'); } catch(e) { alert(e); process.exit(1); }
try { var resize = require('./js/module/resize.js'); } catch(e) { alert(e); process.exit(1); }
try { var settings = require('./js/module/settings.js'); } catch(e) { alert(e); process.exit(1); }
try { var serviceHandler = require('./js/module/serviceHandler.js'); } catch(e) { alert(e); process.exit(1); }
try { var serviceTwitter = require('./js/service/service-twitter.js'); } catch(e) { alert(e); process.exit(1); }
try { var serviceTumblr = require('./js/service/service-tumblr.js'); } catch(e) { alert(e); process.exit(1); }

$(function() {

	if(!localData.iLS())
		alert("localStorage disabled?");

	//localData.sLSTwitter();
	//localData.sLSTumblr();

	initView();

	listener();

});
