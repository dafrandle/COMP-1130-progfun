/*
labLoopsAndArrays.js
Lab: Loops And Arrays
Dustin Frandle - dafrandle@yahoo.com
Written - 3/20/2016

*/

var dayArray = new Array(7);

function buildWeek()
{
   dayArray[0] = "Sunday";
   dayArray[1] = "Monday";
   dayArray[2] = "Tuesday";
   dayArray[3] = "Wednesday";
   dayArray[4] = "Thursday";
   dayArray[5] = "Friday";
   dayArray[6] = "Saturday";
}

function tediousDisplay() //almost skipped this step because i didn't want to type all of this (thank god for copy paste, only had the type it once)
{
   document.write("From tediousDisplay() The days of the week are:<br />"); 
   document.write( dayArray[0] + "<br />");
   document.write( dayArray[1] + "<br />");
   document.write( dayArray[2] + "<br />");
   document.write( dayArray[3] + "<br />");
   document.write( dayArray[4] + "<br />");
   document.write( dayArray[5] + "<br />");
   document.write( dayArray[6] + "<br />");
   document.write("<hr />");
}

function effectiveDisplay()
{
   document.write("From effectiveDisplay() The days of the week are:<br />"); 
   for(x=0; x<dayArray.length; x++)
   {
      document.write( dayArray[x] + "<br />");
   }
   document.write("<hr />");
}