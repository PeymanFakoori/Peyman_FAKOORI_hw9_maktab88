$(document).ready(function(){

    $("div").mouseenter(function(){
        $("div").css("background-color","blue").mouseleave(function(){
        $("div").css("background-color","red")})
        })
    })

