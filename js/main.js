function onresize()
{
    if($(window).width() <= 1080) {
        $(".col-sm-3").width("100%"); 
    }
}

$( document ).ready(function() {
    //add responsive tag to all images
    $(".blog-post").find("img").addClass("img-responsive");
    $(".blog-post").find("img").width("80%");
    //change width of sidebar if columns stacked
    onresize();
    $(window).resize(onresize);
});
