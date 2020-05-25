$(function () {
    // 定位
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
    // nav_bar
    $('.nav_second').hide();
    $('.li_class').mouseenter(function () {
        $('.nav_second').stop(true, false).slideDown(200);
    }).mouseleave(function () {
        $('.nav_second').stop(true, false).slideUp(200);
    });
    $('.nav_third').hide();
    $('.li_nav_second').mouseenter(function () {
        $(this).find('.nav_third').stop(true, false).show();
    });
    $('.li_nav_second').mouseleave(function () {
        $(this).find('.nav_third').stop(true, false).hide();
    });
    //nav_bar
    $('.nav_bar_more ul').hide();
    $('.nav_bar_more').mouseenter(function () {
        $('.nav_bar_more ul').stop(true, false).slideDown(200);
    }).mouseleave(function () {
        $('.nav_bar_more ul').stop(true, false).slideUp(200);
    });
    // 轮播图
    var $auto_picture = $('.auto_picture');
    var $li_width = $('.auto_picture > li').width();
    var current = 0;
    var timeId = null;

    function next() {
        $auto_picture.animate({
            "left": "" + (-$li_width * (current + 1)) + "px" + ""
        }, 500);
        if (current >= 3) {
            $auto_picture.stop().animate({
                "left": "" + (-$li_width * (current + 1)) + "px" + ""
            }, 500, function () {
                $auto_picture.stop().css({
                    "left": "-1140px"
                });
            });
            current = 0;
        }
        $('.auto_circle > ul >li').eq(current).css({
            "background-color": "#ffffff"
        }).siblings().css({
            "background-color": "rgb(0, 0, 0, 0.3)"
        })
    }

    function prev() {
        $auto_picture.animate({
            "left": -$li_width * (current + 1)
        }, 500);
        if (current <= -1) {
            $auto_picture.stop().animate({
                "left": "" + ($li_width * (current + 1)) + "px" + ""
            }, 500, function () {
                $auto_picture.stop().css({
                    "left": -$li_width * 3
                });
            });
            current = 2
        }
        $('auto_circle > ul > li').eq(current).css({
            "background-color": "#fff"
        }).siblings().css({
            "background-color": "rgb(0, 0, 0, 0.3)"
        })
    }
    timeId = setInterval(function () {
        current++;
        next();
    }, 2000)
    $('.banner > .container').mouseenter(function () {
        clearInterval(timeId);
        console.log('鼠标进入了');
    }).mouseleave(function () {
        console.log('鼠标离开了');
        timeId = setInterval(function () {
            current++;
            next();
        }, 2000)
    })
    $('.next').stop().on('click', function () {
        if ($('.auto_picture').is(':animated')) {
            console.log('当前正在进行动画')
        } else {
            current++;
            next();
        }
    })
    $('.prev').stop().on('click', function () {
        if ($('.auto_picture').is(':animated')) {
            console.log('当前正在进行动画')
        } else {
            current--;
            prev();
        }
    })
    // 分页展示
    $('.content_nav_ul > li > a').mouseenter(function () {
        $(this).addClass('content_nav_current').parents().siblings().children().removeClass('content_nav_current');
    });
    $('.content_page_right').hide();
    $('.content_page_right').eq(0).show();
    $('.content_nav_ul > li > a').mouseenter(function () {
        $('.content_page_right').eq($(this).index('.content_nav_ul > li > a')).show();
        $('.content_page_right').eq($(this).index('.content_nav_ul > li > a')).siblings().hide();
        $("img.show").lazyload({
            effect: "fadeIn",
            event: "sroll"
        });
    });
    // 分功能区块点击跳转到对应区块
    $('.sidebar_blocks > div').click(function () {
        var $sidebar_index = $(this).index(); //点击这块的sidebar索引
        var $content_blocks = $('.content_blocks') //内容块的盒子的元素
        // 找到对应区块
        $('html,body').animate({
            scrollTop: $content_blocks.find('div').eq($sidebar_index).offset().top
        }, 200)
        $(this).css({
            "background-color": "#ff5500",
            "color": "#fff"
        }).siblings().css({
            "background-color": "#fff",
            "color": "#333"
        });
    });
    // sidebar 分功能区块侧边点击高亮
    $('.sidebar_blocks > div:first-child').css({
        "background-color": "#ff5500",
        "color": "#fff"
    });
    $(document).on('scroll', function () {
        //获取当前滚动距离
        var $documentScrollTop = $(document).scrollTop();
        var $content_blocks = $('.content_blocks > div') //内容块的盒子的元素
        var i = 0;
        // 各个区块滚动到的距离和document滚动的距离进行对比
        // 获取各个区块滚动到的距离
        for (var i = 0; i < $content_blocks.length; i++) {
            var $content_blocks_offsetTop = $content_blocks.eq(i).offset().top;
            if ($documentScrollTop >= $content_blocks_offsetTop - 120) {
                $('.sidebar_blocks > div').eq(i).css({
                    "background-color": "#ff5500",
                    "color": "#fff"
                }).siblings().css({
                    "background-color": "#fff",
                    "color": "#333"
                });
            }
        }
    });
    // 分功能区块侧边  根据滚动出现或消失
    $(document).on('scroll', function () {
        var $documentScrollTop = $(document).scrollTop();
        if ($documentScrollTop >= 1200) {
            $('.sidebar_blocks').stop().animate({
                "opacity": "1",
                "top": "20%"
            }, 200);
        } else if ($documentScrollTop < 1200) {
            $('.sidebar_blocks').stop().animate({
                "opacity": "1",
                "top": "100%"
            }, 200);
        }
    });
    // 固定导航
    var $head_nav_offset = $('.head_nav');
    var $head_nav_top = $head_nav_offset.offset().top;
    $(document).on('scroll', function () {
        var $documentScrollTop = $(document).scrollTop();
        if ($documentScrollTop > $head_nav_top) {
            $head_nav_offset.css({
                "position": "fixed",
                "top": "-43px",
                "z-index": 999,
                "border-bottom": "2px solid #ff5500"
            });
            $head_nav_offset.animate({
                "top": 0
            }, 0)
        } else {
            $head_nav_offset.css({
                "position": "relative",
                "top": "0",
                "border-bottom": "none"
            });
        }
    })
})
$(function () {
    $("img.show").lazyload({
        effect: "fadeIn"
    });
});