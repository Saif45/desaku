$(function jmcScript(){
    $('body').layout();
});

$.fn.layout = function() {
	if($('.breadcrumb li').length > 1){
        var primary     = $('.breadcrumb li').eq(1).text().replace(/ /g,''),
            secondary   = $('.breadcrumb li').eq(2).text().replace(/ /g,''),
            third       = $('.breadcrumb li').eq(3).text().replace(/ /g,'');

        $('.navbar-nav > li > a').filter(function() {
            var text = $(this).text().replace(/ /g,''); 
            return text == primary;
        }).parent().addClass('active');
    } else {
        $('.navbar-nav > li > a').parent().eq(0).addClass('active');
    }

    $('.confirmation').live('click',function(){
		var title 		= $(this).data('title') || 'Alert',
			message		= $(this).data('message') || 'Are You Sure?',
			type  		= $(this).data('type') || 'warning',
			cancel  	= $(this).data('cancel') || true,
			cancelText 	= $(this).data('cancelText') || 'Cancel',
			confirmText = $(this).data('confirmText') || 'OK',
			autoClose 	= $(this).data('autoClose') || true,
			href		= $(this).attr('href'),
			deleteAll	= $(this).hasClass('btn_delete_all');

		swal({   
            title: title,   
            text: message,   
            type: type,   
            showCancelButton: cancel,   
            cancelButtonText:cancelText,
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: confirmText,   
            closeOnConfirm: autoClose
        }, function(){
        	if(deleteAll){
				location.href = href;
			}else{			
	        	$.pjax({
					 type: 'POST',
					 url: href,
					 container: '#pjax-table',
				});
			}   
        });
        return false;
	});

    $('.social-link a').click(function(){
        window.open($(this).attr('href'),"mywindow","menubar=1,resizable=1,width=500,height=250");
        return false;
    });
};

function noticeSuccess(message){
	var message = message || 'Proses Berhasil';

    sweetAlert({
    	title 	: 'Success',
    	text 	: message,
    	type	: 'success',
    	showCancelButton : false,
    	showConfirmButton : true
    });
}
function noticeFailed(message){
	var message = message || 'Proses Gagal';

    sweetAlert({
    	title 	: 'Error',
    	text 	: message,
    	type	: 'error',
    	showCancelButton : false,
    	showConfirmButton : true
    });
}
function noticeWarning(message)
{
	var title 		= 'Warning',
		message		= message || 'This process cannot be forwarded!';

	swal({   
        title: title,   
        text: message,   
        type: 'warning',   
        showCancelButton: true,   
        cancelButtonColor: "#9f0000",
        cancelButtonText: 'Kembali',
        showConfirmButton: false, 
        closeOnConfirm: false
    });
}

$(function navList(){
    $('.nav-list li.nav-header a').click(function(){
        if($(this).next('ul').is(':hidden')){
            $(this).next('ul').slideDown();
        } else {
            $(this).next('ul').slideUp();
        }
    });

    $('.nav-list li.nav-header ul li.active-li a').parent().parent().show();
});

$(function(){

    if($('.data-sidebar .nav-list').find('li').hasClass('active-li')){
        var pos = $('.data-sidebar .nav-list li.active-li').last().offset();
        var activetop = localStorage.getItem("activetop");
        if(activetop == "") activetop = pos.top;
        var nowpos = parseInt(activetop)-parseInt(pos.top);
        $('.data-sidebar').scrollTop(nowpos*-1);        
    }
    
    $('.data-sidebar .nav-list').find('a').click(function(){
        localStorage.setItem("activetop", $(this).offset().top);
    });
});