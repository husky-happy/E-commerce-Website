$(function(){
// 侧边栏 sidebar 模块
// 账号扩展模块 account_extend
$('.account_extend').css({
    "opacity": 0,
    "left": 4,
    "z-index": -1
});
$('.account').mouseenter(function () {
    $('.account_extend').animate({
        "left": "-280px",
        "opacity": "1"
    }, 300);
});

$('.account_extend').mouseleave(function () {
    $('.account_extend').animate({
        "left": "43",
        "opacity": "0"
    }, 300);
});
$('.close_account_extend').click(function () {
    $('.account_extend').animate({
        "left": "43",
        "opacity": "0"
    }, 300);
});

// 购物车扩展 cart_extend
$('.cart_extend').css({
    "right": "-336px"
})
$('.cart').click(function () {
    $('.cart_extend').animate({
        "right": "36px"
    }, 500)
})
$('.cart_close').click(function () {
    $('.cart_extend').animate({
        "right": "-336px"
    })
})

$('.collection,.footprint,.signIn,.Consultation').mouseenter(function () {
    $(this).find('span').stop().css({
        "display": "block"
    });
    $(this).find('span').stop().animate({
        "opacity": "1"
    }, 500);
}).mouseleave(function () {
    $(this).find('span').stop().css({
        "display": "none"
    });
    $(this).find('span').stop().animate({
        "opacity": "0"
    }, 500);
});

$('.return_top').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 200)
})
var data = sessionStorage.getItem('username');
    $('#login').text(data);
    if(data === null) {
        $('#login').text('亲，请登录');
    }
})


