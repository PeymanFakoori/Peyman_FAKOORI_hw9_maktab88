$(document).ready(function() {    
let corrent = 10
$("button").on("click" , function(){
    if(corrent<100){
    corrent += 10
    $("#myBar").css({width : `${corrent}%`
    })}
        $("#myBar").text(`${corrent}%`)
    })
})