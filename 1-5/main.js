$(document).ready(function() {

    $(".slide-down").click(function(){
    $("div").slideDown(1000);
    })
    $(".slide-up").click(function(){
        $("div").slideUp(1000);
    })
    $(".toggle").click(function(){
        $("div").slideToggle(1000);
    })
})