import $ from 'jquery';
import './_burger-menu.js';


// hero-nav
if (document.querySelector('.hero-nav')) {

  var blocks = [];
  var blocksPos = [];
  var links = $('a[href*="#"].hero-nav-list-li__link');
  
  $(links).each(function(index, item) {
    blocks.push($(item).attr('href'));
  });

  $(blocks).each(function(index, item) {
    blocksPos.push($(item).offset().top);
  }); 


  $(window).scroll(function(event) {
    checkScrollItem();
  });

  function checkScrollItem() {
    var currElem;
    var currElemIndex;
    $(blocks).each(function(index, item) {
      if ($(window).scrollTop() > $(item).offset().top) {
        currElem = item;
        currElemIndex = index;
      }
    });


    if (currElemIndex === undefined) {
      currElemIndex = 0;
    }

    $(links).parent().removeClass('is-active');
    $($(links)[currElemIndex]).parent().addClass('is-active');    

    return currElem;

  }

  // function isVisible(tag) {
  //   console.log('tag = ', tag);
  //   var t = $(tag);
  //   console.log('t = ', t);
  //   var w = $(window);
  //   console.log('w = ', w);
  //   var wt = w.scrollTop();
  //   console.log('wt = ', wt);
  //   var tt = t.offset().top;
  //   console.log('tt = ', tt);
  //   var tb = tt + t.height();
  //   console.log('tb = ', tb);
  //   return ((tb <= wt + w.height()) && (tt >= wt));
  // }

}
// hero-nav

// smooth scrolling
// Select all links with hashes
$('a[href*="#"].hero-nav-list-li__link').click(function(event) {
  $('a[href*="#"].hero-nav-list-li__link').not($(this)).parent().removeClass('is-active');
  $(this).parent().addClass('is-active');
  // On-page links
  if (
    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
      && 
      location.hostname === this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});
// smooth scrolling

// tabs
if (document.querySelector('.tabs')) {
  $('.tabs-nav li').click(function(event) {
    $('.tabs-nav li').not($(this)).removeClass('is-active');
    $(this).addClass('is-active');
    $('.tabs-content-item').removeClass('is-active');
    $($('.tabs-content-item')[$('.tabs-nav li').index($(this))]).addClass('is-active');
  });
}
// tabs
