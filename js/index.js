$(".firstTab").click(function() {
    $(".firstTab").css("background-color", "#ff9b51");
    $(".secondTab").css("background-color", "#333333");
    $(".thirdTab").css("background-color", "#333333");
    $(".firText").show();
    $(".secText").hide();
    $(".thirdText").hide();
});

$(".secondTab").click(function() {
    $(".firstTab").css("background-color", "#333333");
    $(".secondTab").css("background-color", "#ff9b51");
    $(".thirdTab").css("background-color", "#333333");
    $(".firText").hide();
    $(".secText").show();
    $(".thirdText").hide();
});

$(".thirdTab").click(function() {
    $(".firstTab").css("background-color", "#333333");
    $(".secondTab").css("background-color", "#333333");
    $(".thirdTab").css("background-color", "#ff9b51");
    $(".firText").hide();
    $(".secText").hide();
    $(".thirdText").show();
});

$(function() {
    $('.smooth').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
