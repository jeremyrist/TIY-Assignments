$(document).ready(function(){
  $(".box").hover(function(){
    $(this).children().children('.hiddentext').css("visibility", "visible");
  });
    $(".box").mouseleave(function(){
      $(this).children().children('.hiddentext').css("visibility", "hidden");
    })
})
