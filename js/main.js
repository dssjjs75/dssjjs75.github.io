function onresize()
{
    if($(window).width() <= 1080) {
        var w = $(window).width()*0.5;
        $(".col-sm-3").width(w); 
        $(".sidebar-table").width(w); 
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
