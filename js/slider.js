(function($) {
  $.fn.carousel = function() {
    var leftUIEl = $('.arrow-left');
    var rightUIEl = $('.arrow-right');
    var elementsList = $('.list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
      currentLeftValue += 125;
      elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 125;
      elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });
  };
})(jQuery);
