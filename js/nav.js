$(document).ready(function() {
  var mobileNav = $("#mobile-nav-button");
  var sectionNav = $("#section-nav");
  var sectionLink = $(".section-link");
  var navBttn = $("#button-span");

  mobileNav.on("click", function(event) {
    if (mobileNav.attr("class") == "toggled") {
      sectionNav.css("display", "none");
      mobileNav.attr("class", "");
      navBttn.attr("class", "");
    } else {
      sectionNav.css("display", "block");
      mobileNav.attr("class", "toggled");
    }
  });

  sectionLink.on("click", function(event) {
    if (mobileNav.attr("class") == "toggled") {
      sectionNav.css("display", "none");
      mobileNav.attr("class", "");
    }
  });

  $(window).on("resize", function(event) {
    var x = $(document).width();

    mobileNav.attr("class", "");

    if (x >= 800) {
      sectionNav.css("display", "block");
    } else {
      sectionNav.css("display", "none");
    }
  });
});
