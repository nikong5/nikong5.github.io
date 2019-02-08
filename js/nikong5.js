// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
	$(".contentsPanel").each(function() {                
		$(this).prepend('<div class="hidePanel">[hide]</div><div class="showPanel">[show]</div>');
	});
	
	
    $(".hidePanel").click(function(){
		$( this ).siblings('ul').hide( 150, function() { 
			$(this).parent().addClass('minimizedPanel');
		});
    });
    $(".showPanel").click(function(){
		$( this ).siblings('ul').show( 150, function() { 
			$(this).parent().removeClass('minimizedPanel');
		});
    });
	
	
});


// ************************************ customize for Nikong5 ************************************

$(function(){
    // Include
    $("#header-include").load("header.html #pageheader");
    $("#footer-include").load("footer.html #pagefooter");
    $("#sub-header-include").load("../../sub-header.html #subPageheader");
    $("#sub-footer-include").load("../../footer.html #pagefooter");

    // // Search box
    // $("#searchBox").keyup(function () {
    //     var value = $(this).val();
    //     $("#dataSet li").each(function () {
    //         $(this).hide();
    //         if ($(this).text().indexOf($.trim(value)) >= 0) {
    //             $(this).show();
    //         }
    //     });
    // });
    
});
