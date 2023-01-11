$(document).ready(function(){
$(".parent").on('click', function(){
    $(".child1").text($(".child1").text() + $(".main").text());
})

$(".child").on('click', function(){
    $(".child1").text($(".child2").text() + $(".main").text());
})
});