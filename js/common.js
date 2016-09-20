// gnb: pc version open & close
$('#pc-nav').on({
    mouseenter: function () {
        $(this).find('ul').css({

            'height': '222px',
            'margin': '16px 0 25px'
        })
    },
    mouseleave: function () {
        $(this).find('ul').css({
            'height': '0px',
            'margin': 0
        })
    }
})

$('.expand-area > li').on({
    mouseenter: function () {
        $(this).addClass('on');
    },
    mouseleave: function () {
        $(this).removeClass('on');
    }
})


// gnb: mobile version open & close
$('#mobile-nav > li').on({
    // mouseenter: function () {
    //     // $(this).children('ul').fadeIn(350);
    //     $(this).children('ul').slideDown();
    //     $(this).addClass('change');
    // },
    // mouseleave: function () {
    //     // $(this).children('ul').fadeOut(100);
    //     $(this).children('ul').slideUp();
    //     $(this).removeClass('change');
    // },
    click: function () {
        $(this).children('ul').slideDown()
        .parent().addClass('change')
        .siblings().children('ul').slideUp()
        .parent().removeClass('change');
    }
})


// prepare
$('.prepare').on({
    click: function () {
        alert("현재 준비 중입니다.");
        return;
    }
})
