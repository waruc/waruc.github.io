var scrollerOn = false;
var h_index = 0;
var elements = [];

$(document).ready(function() {
  elements = [$('#landing'), $('#about'), $('#spec'), $('#tech'), $('#future')];
  setInterval(runScroller, 20000);
});

function runScroller() {
  if (scrollerOn) {
    goTo = elements[h_index].offset().top;
    h_index += 1;

    if (h_index == elements.length) {
      h_index = 0;
    }

    $('html, body').stop().animate( {
        'scrollTop': goTo
    }, 1000, 'swing');
  }
}
