$(' a[href="#products"] ').on('click', function(){
  console.log("fuck");
  $(' section#products ').toggleClass('active').siblings().removeClass('active');
});
