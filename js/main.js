function onresize()
{
    if($(window).width() <= 1080) {
        //change width of sidebar if columns stacked
        var w = 500;
        $(".col-sm-3").width(w); 
        $(".sidebar-table").width(w); 
    }
}

$( document ).ready(function() {
    //add responsive tag to all images
    $(".blog-post").find("img").addClass("img-responsive");
    //$(".blog-post").find("img").width("80%");
    
    onresize();
    $(window).resize(onresize);
});
