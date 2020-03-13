$(document).ready(function () {
     $(".list__dropdown").hide();
     /* $(".list__dropdown--item:odd").css("background-color", "#efefef"); */
     $(".list__title--arrow").click(function () {
          $(this).parent().next().slideToggle();
     });
     $(".list__title--text").click(function () {
          $(this).parent().next().slideToggle();
     });
});