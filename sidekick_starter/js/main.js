
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 800,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
            Counter: $(this).text()
    }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                    $(this).text(Math.ceil(now));
            }
    });
});
$(document).ready(function() {

    function animateLeft() {
      $("#toAnimate").animate({
        opacity: 0,
        right: 100
      }, 500, function() {
        $('#toAnimate').css('right', '0');
        $('#toAnimate').css('opacity', '1');
      });
    }
  
    function animateRight() {
      $("#toAnimate").animate({
        opacity: 0,
        left: 100
      }, 500, function() {
        $('#toAnimate').css('left', '0');
        $('#toAnimate').css('opacity', '1');
      });
    }
  
    $('#leftButton').click(function() {
      animateLeft();
    });
  
    $('#rightButton').click(function() {
      animateRight();
    });
  
  });