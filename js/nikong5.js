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
// // Lock page
// window.addEventListener('touchstart',function(e){e.preventDefault();},{passive:false});
// window.addEventListener('touchmove',function(e){e.preventDefault();},{passive:false});

$(function(){
    // Include
    $("#header-include").load("header.html #pageheader");
    $("#footer-include").load("footer.html #pagefooter");
    $("#sub-header-fgo-include").load("../../sub-header-fgo.html #subPageheader");
    $("#sub-header-dl-include").load("../../sub-header-dl.html #subPageheader");
    $("#sub-header-jianr-include").load("../../sub-header-jianr.html #subPageheader");
    $("#sub-header-punish-include").load("../../sub-header-punish.html #subPageheader");
    $("#sub-footer-include").load("../../footer.html #pagefooter");
    $("#top-button-include").load("../../top-button.html #topButton");

    // Search box
    // $('#searchBox').on('input', function(e) {
    //     var value = $(this).val();
    //     $("#dataSet li").each(function () {
    //         $(this).hide();
    //         if ($(this).text().indexOf($.trim(value)) >= 0) {
    //             $(this).show();
    //         }
    //     });
    //     if('' == this.value) {
    //         // $("#dataSet li").each(function () {
    //         //     $(this).show();
    //         // });
    //         document.body.onload();
    //     }
    // });
    
});

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

function toggle_visibility_jianr(num,name) {
    var n = document.getElementsByName(name);
    for (i=0;i<n.length;i++) {
        if (i == num-1) {
            if(n[i].style.display == 'block'){
                n[i].style.display = 'none';
            }else{
                n[i].style.display = 'block';
            }
        } else {
            n[i].style.display = 'none';
        }
    }
}

