$(function(){
    var img = sessionStorage.getItem('img');
    if (img || num) {
        var iAll = 38.9;
        $('.Pay').html('<section class="have_product"><div class="container"><table><tr><th>精选特卖</th><th>单价</th><th>数量</th><th>小计</th><th>操作</th><tr><tr><th><img src="'+img+'"></th><th>$38.9</th><th><input class="iCount" type="number" min="1" value="'+1+'"></th><th id="all">$38.9</th><th><a id="Pay" href="javascript:void(0)">结算</a></th><tr><table></div></section>')
        $('.iCount').on('click', function () {
            iAll = $('.iCount').val() * 38.9;
            $('#all').html('$'+iAll);
        })
        $('#Pay').click(function () {
            $('.Pay').html('<p>支付完成，<a href="index.html">继续挑选</a></p>');
        })
    } else {
        $('.Pay').html('<p>您还未挑选您任何商品，<a href="index.html">立即抢购</a></p>');
    }
})
