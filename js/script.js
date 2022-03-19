// fadeOut do loader
$(window).on("load", function () {
  $(".loader-container").fadeOut("slow");
  $("body").removeClass("loading");
});

// botao toTop

// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function () {
  // declare variable
  var topPos = $(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 100) {
    $(scrollTop).css("opacity", "1");
  } else {
    $(scrollTop).css("opacity", "0");
  }
}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
}); // click() scroll top END
let items = $(".cards-row").children();
$("#lp-tag").click(function () {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("react-js")) {
      items[i].classList.add("card-hid");
    } else if (items[i].classList.contains("landing-page")) {
      items[i].classList.remove("card-hid");
    }
  }
});
$("#r-tag").click(function () {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("landing-page")) {
      items[i].classList.add("card-hid");
    } else if (items[i].classList.contains("react-js")) {
      items[i].classList.remove("card-hid");
    }
  }
});

$("#reset-tag").click(function () {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("card-hid")) {
      items[i].classList.remove("card-hid");
    }
  }
});
