/*
prjjQuery.js
Dustin Frandle - dafrandle@yahoo.com
Project: prjjQuery
Written - 4/25/2016

*/

$(document).ready(function()
{
   console.log("jQuery 2.X is working. CDN source: https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js");
   //All jQuery Code:
   //next 4 lines 1.shows a hint 2.makes the meal boxes float (using inline-block) 3.hides the meal info in those boxes 4.makes the mouse cursor show a pointer over the images for the meals
   $("#toolTip").css("display", "block");
   $(".mealBox").css("display", "inline-block");
   $(".mealInfo").css("display", "none");
   $(".mealPic").css("cursor", "pointer");
   
   //waches until a user clicks one of the pictures
   $(".mealPic").click(function()
   {
      // gets the id of the info box for the meal the user selected
      var mealWindow = $(this).attr("rel");
      
      //shows it and the shaded background
      $("#modalShade").fadeIn();
      $("#" + mealWindow).fadeIn();
      
      //repostions window to center of screen
      var modalTop = ($("#" + mealWindow).height() + 80) / 2;
      var modalLeft = ($("#" + mealWindow).width() + 80) / 2;
      $("#" + mealWindow).css(
      {
         "margin-top":-modalLeft,
         "margin-left":-modalTop
      });
      
      //window closing functions:
      //closes the window if the user presses the close button in the top right
      $(".close").click(function()
      {
         $("#modalShade").fadeOut();
         $("#" + mealWindow).fadeOut();
      });
      
      //closes if the user clicks on the shading in the background
      $("#modalShade").click(function()
      {
         $("#modalShade").fadeOut();
         $("#" + mealWindow).fadeOut();
      });
   });
});