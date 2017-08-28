$( document ).ready(function() {
    //add responsive tag to all images
    $(".blog-post").find("img").addClass("img-responsive");
    $(".blog-post").find("img").width("80%");

    //change width of sidebar if columns stacked
    if($(window).width() <= 1080) {
        alert('hello'); 
    }

});
