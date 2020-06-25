$(document).ready(function(){
    $('.item').on('click', function(){
        $('.item').removeClass('active');
        $(this).addClass('active');
    });
    $('.itemFormat').on('click', function(){
        $('.itemFormat').removeClass('active');
        $(this).addClass('active');
    });
    $('.change-step').click(function(e){
        e.preventDefault();
        $(this).parents('section').removeClass('active')
        $(this).parents('section').addClass('passed');
        $(this).parents('section').next().addClass('active');
        var id = $(this).parents('section').attr('id');
        $('.ariane div').removeClass('active');
        $('.step-'+id).next().addClass('active');
        $('.step-'+id).addClass('passed');
        $('.final.active .js-final-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoPlay: false,
            infinite : false
        });
    });

    $('.quantity img').click(function(){
        var number = parseInt($(this).parents('.quantity').find('div').text());
        if($(this).hasClass('plus')){
            var total = number + 1;
            $(this).parents('.quantity').find('div').text(total);
        }else{
            if( number != 0){
                var total = number - 1;
                $(this).parents('.quantity').find('div').text(total);
            }
        }

    });
    $('.js-upload-img-btn').click(function(e) {
        e.preventDefault();
        $(this).parents('.add-images__images').hide();
        $('.add-images__uploaded').addClass('display');
    });

    $('.js-modify-btn').click(function(e) {
        e.preventDefault();
        $('.final__modify').addClass('active');
        $('.final__container').addClass('inactive');
    });

    $('.js-trash-btn').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().addClass('inactive');
    });

    $('.js-check-btn').click(function(e) {
        e.preventDefault();
        $('.final__modify').removeClass('active');
        $('.final__container').removeClass('inactive');
    });

});