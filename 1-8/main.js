$(document).ready(function() {
    $(".first").on("click", function(){
        $(".text1").slideDown()
        $(".text2").slideUp()
        $(".text3").slideUp()
        $(".first i").removeClass("fa fa-caret-right").addClass("fa fa-caret-down")
        $(".secound i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
        $(".third i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
    
    })
    $(".secound").on("click", function(){
        $(".text2").slideDown()
        $(".text1").slideUp()
        $(".text3").slideUp()
        $(".secound i").removeClass("fa fa-caret-right").addClass("fa fa-caret-down")
        $(".first i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
        $(".third i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")


    })
    $(".third").on("click", function(){
        $(".text3").slideDown()
        $(".text2").slideUp()
        $(".text1").slideUp()
        $(".third i").removeClass("fa fa-caret-right").addClass("fa fa-caret-down")
        $(".first i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
        $(".secound i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
    })


})