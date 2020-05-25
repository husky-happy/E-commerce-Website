$(function () {
    $('.location_extension').hide();
    $('.location > a').click(function () {
        $('.location_extension').show();
        $('.location').css({
            "background-color": "#fff",
            "border-top": "1px solid #ccc",
            "border-left": "1px solid #ccc",
            "border-right": "1px solid #ccc"
        })
    })
    $('.province_select').hide();
    $('.province').click(function () {
        $(this).addClass('location_current');
        $(this).siblings().removeClass('location_current');
        $('.province_select').show();
        $('.city_select').hide();
    });
    $('.city').click(function () {
        $(this).addClass('location_current');
        $(this).siblings().removeClass('location_current');
        $('.province_select').hide();
        $('.city_select').show();
    });
    // 关闭定位扩展 close_location
    $('.location_close').click(function () {
        $('.location_extension').hide();
        $('.location').css({
            "background-color": "#eaeaea",
            "border": "none"
        })
    });
    // 点击切换省份
    $('.city_select  a').click(function () {
        $(this).css({
            "background-color": "#52a0e5",
            "color": "#fff"
        }).siblings().css({
            "background-color": "#fff",
            "color": "#333"
        })
    })
    $('.province_select a').click(function () {
        $(this).css({
            "background-color": "#52a0e5",
            "color": "#fff"
        }).siblings().css({
            "background-color": "#fff",
            "color": "#333"
        })
    })
    // 选项卡切换
    $('.account').click(function () {
        $(this).addClass('current').siblings().removeClass('current')
        $('.code_content').css({
            "display": "none"
        });
        $('.account_content').css({
            "display": "block"
        });
    })
    $('.code').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.code_content').css({
            "display": "block"
        });
        $('.account_content').css({
            "display": "none"
        });
    })
})
window.onload = function () {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var button = document.getElementById('button');
    button.onclick = function () {
        if (username.value) {
            sessionStorage.setItem("username", username.value);
            alert('登录成功,快去抱回您最喜爱的宠物吧~~')
            window.location.href = "index.html";
        } else {
            alert('信息不能为空');
        }
    }
}