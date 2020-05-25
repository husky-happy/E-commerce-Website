$(function () {
    $('.item_show_small_img img').hover(function () {
        $('.item_show_big_img img').attr('src', $(this).attr('src'));
    });
    $('.big_QR_code').hide();
    $('.phone_buy').mouseenter(function () {
        $('.big_QR_code').stop(true, false).slideDown(100);
    }).mouseleave(function () {
        $('.big_QR_code').stop(true, false).slideUp(200);
    })
    var $num = 0;
    $('.btn_add_buy_car').on('click', function () {
        $('.cart_extend').animate({
            "right": "36px"
        }, 500);
        $('.content').css({
            "top": 0,
            "line-height": 0
        })
        $('.content').html(
            '<div class="have_content"><img src="../images/details/brief_show_1.png"><p>狗狗尿垫尿片吸水垫除加厚</p><p>100片/包</p><p class="num">1<p><p>￥38.9<p></div><div id="toPay" class="toPay"><a style="color:#fff;">去结算</a></div>');
        $num += 1;
        $('.content p.num').html($num);

    })
})
window.onload = function () {
    var push_cart = document.getElementsByClassName('btn_add_buy_car')[0];
    push_cart.onclick = function () {
        var toPay = document.getElementById('toPay');
        var route = document.getElementsByClassName('have_content')[0];
        var img = route.getElementsByTagName('img')[0];
        toPay.onclick = function () {
            sessionStorage.setItem("img", img.src);
            window.location.href = "Pay.html";
        }
    }

}