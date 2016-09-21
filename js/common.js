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
$('#mobile-nav > li > ul').slideUp()
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
        $(this).addClass('change').siblings().removeClass('change');
        $(this).children('ul').slideDown(0,'linear');
        $(this).siblings().children('ul').slideUp(0,'linear');
    }
})


// prepare
$('.prepare').on({
    click: function () {
        alert("현재 준비 중입니다.");
        return;
    }
})
