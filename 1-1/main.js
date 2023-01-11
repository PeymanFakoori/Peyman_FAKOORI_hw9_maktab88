$(document).ready(function(){

$("div").on("click", function(){
    const text = $(this).text();
    const newText = text + " " + "Click Added some text!"
    $(this).text(newText);
})
})