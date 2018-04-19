$(document).ready(function(){
   $(".option").click(function(){
      var value = $(this).attr("data-filter");
      if (value == "all") {
         $(".filter").show("100");
      }
      else {
         $(".filter").hide();
         // $(".filter").not("."+value).hide();
         $(".filter").filter("."+value).delay("200").show("100");
      }
      $("ul .option").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
      })
   })
});
