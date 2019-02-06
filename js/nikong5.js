// ************************************ customize for Nikong5 ************************************

$(function(){
    // Include
    $("#header-include").load("https://nikong5.github.io/header.html #pageheader");
    $("#footer-include").load("https://nikong5.github.io/footer.html #pagefooter");

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
