// ************************************ customize for Nikong5 ************************************

$(function(){
    // Include
    $("#header-include").load("header.html #pageheader");
    $("#footer-include").load("footer.html #pagefooter");
    $("#sub-header-include").load("../../sub-header.html #subPageheader");
    $("#sub-footer-include").load("../../footer.html #pagefooter");

    // Search box
    $("#searchBox").keyup(function () {
        var value = $(this).val();
        $("#dataSet li").each(function () {
            $(this).hide();
            if ($(this).text().indexOf($.trim(value)) >= 0) {
                $(this).show();
            }
        });
    });
    
});
