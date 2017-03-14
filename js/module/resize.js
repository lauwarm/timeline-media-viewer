var sem = false;

var resizer = function (elem) {

  if(sem == false) {
    sem = true;
    $(elem).toggleClass('active');
    $(elem).children('img').toggleClass('big');

    $(elem).css({
      top: $('.window').scrollTop() -5,
      height: $(window).height() ,
      width: $(window).width() - 10
    });
  }
  else if(sem == true) {
    sem = false;
    $(elem).toggleClass('active');
    $(elem).children('img').toggleClass('big');

    $(elem).css({
      top: '',
      height: '200px',
      width: '200px'
    });
  }

};

var updater = function(elem) {
  $(elem).css({
    top: $('.window').scrollTop() -5,
    height: $(window).height() ,
    width: $(window).width() - 10
  });
};
