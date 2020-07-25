$(function(){
    $('.navbar-toggle').on('click',function(){
		if($('.navigation').hasClass('in')){
			$('body').removeClass('noscroll');
		} else {
			$('body').addClass('noscroll');
		}
	});
	$('[data-toggle="popover"]').popover();
	if (parseInt($(window).width()) < 769){
		$('.navigation .navbar-nav li ul').parent().append('<span class="sub-toggle"><i class="caret"></i></span>');
		$('.navigation .navbar-nav li .sub-toggle').on('click',function(){
			$(this).parent().children('ul').toggle();
		});

		$('.works-nav-container').append('<button type="button" class="btn-next"><i class="fa fa-caret-right"></i></button><button type="button" class="btn-prev"><i class="fa fa-caret-left"></i></button>');
		$('.works-nav-container .btn-next').on('click',function(){
			$(this).parent().find('.box').animate({scrollLeft:'+=200'});
		});
		$('.works-nav-container .btn-prev').on('click',function(){
			$(this).parent().find('.box').animate({scrollLeft:'-=200'});
		});
	}
});

function highlight(string) {
    $(".sidebar-data > ul > li > ul > li.match").find('.text').each(function () {
        var matchStart = $(this).text().toLowerCase().indexOf("" + string.toLowerCase() + "");
        var matchEnd = matchStart + string.length - 1;
        var beforeMatch = $(this).text().slice(0, matchStart);
        var matchText = $(this).text().slice(matchStart, matchEnd + 1);
        var afterMatch = $(this).text().slice(matchEnd + 1);
        $(this).html(beforeMatch + "<span class='bg-red'>" + matchText + "</span>" + afterMatch);
    });
};