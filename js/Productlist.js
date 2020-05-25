$(function (){
    $('.price_sequence ul').hide();
    $('.price_sequence').mouseenter(function () {
        $('.price_sequence ul').stop(true, false).slideDown(200);
    }).mouseleave(function () {
        $('.price_sequence ul').stop(true, false).slideUp(200);
    });
    $('.item_show_info').click(function(){
        window.location = 'Productdetails.html';
    })
    
})

