var index = 0,
    num = 5,
    itemWidth = 520,
    timer = undefined;

timerFun();
function move(dirction) {
    clearTimeout(timer);
    $('.img-box').stop(false, true);
    if (dirction == 'prev') {
        index--;
        if (index < 0) {
            $('.img-box').css({
                left: num * -itemWidth
            });
            index = 4;
        }
    }else if (dirction == 'next') {
        index++;
        if (index > num) {
            $('.img-box').css({
                left: 0
            });
            index = 1;
        }
    }
    $('.img-box').animate({
        left: index * -itemWidth
    }, function () {
        timerFun();
    });
    active($('.item').eq(index == 5 ? 0 : index));
}

function timerFun() {
    timer = setTimeout(function () {
        move('next');
    }, 3000);
}

$('.prevBtn').click(function() {
    move('prev');
});

$('.nextBtn').click(function() {
    move('next');
});

function active(dom) {
    $('.active').removeClass('active');
    dom.addClass('active');
}
$('.item').click(function () {
    index = $(this).index();
    move('');
});

$('.img-box').mouseenter(function () {
    clearTimeout(timer);
}).mouseleave(function () {
    timerFun();
});