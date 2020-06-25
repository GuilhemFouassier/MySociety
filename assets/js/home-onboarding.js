$(document).ready(function(){
    $('.photos nav a').click(function(e){
        e.preventDefault();
        $('.photos nav a').removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('content');
        $('.photos article').removeClass('open');
        $('.photos #'+id).addClass('open');
    })
});