$(document).ready(function() {
  $("#fullpage").fullpage({
    anchors: ["page1", "page2", "page3", "page4"],
    controlArrows: false
  });
  $.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);

  $(document).on("click", "#home", function() {
    $.fn.fullpage.moveTo("page1", 1);
  });
  $(document).on("click", "#contact", function() {
    $.fn.fullpage.moveTo("page1", 0);
  });
  $(document).on("click", "#works", function() {
    $.fn.fullpage.moveTo("page1", 2);
  });
  $(document).on("click", "#team", function() {
    $.fn.fullpage.moveTo("page2");
  });
});

// new fullpage("#fullpage", {
//   anchors: ["page1", "page2", "page3", "page4"]
// });
