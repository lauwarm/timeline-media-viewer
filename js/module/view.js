var initView = function() {
	if(localData.cLSTwitter())
		serviceHandler.serviceHandler(serviceTwitter.serviceTwitter, setView);

	if(localData.cLSTumblr())
		serviceHandler.serviceHandler(serviceTumblr.serviceTumblr, setView);

};

function sortView(error, value) { //use this for callback of initView

}

function setView(error, url) {
	if(error) {
		alert("we got a problem");
	}
	url.forEach(function(value) {
		$(".window").append(div.div(value));
	});
};
