/*
dateLab.js
Lab: Date Functions
Dustin Frandle - dafrandle@yahoo.com
Written - 3/28/2016

*/

var dayArray = new Array(7);
var monthArray = new Array(12);

function populate()
{
   dayArray[0] = "Sunday";
   dayArray[1] = "Monday";
   dayArray[2] = "Tuesday";
   dayArray[3] = "Wednesday";
   dayArray[4] = "Thursday";
   dayArray[5] = "Friday";
   dayArray[6] = "Saturday";
   
   monthArray[0] = "Jan.";
   monthArray[1] = "Feb.";
   monthArray[2] = "Mar.";
   monthArray[3] = "Apr.";
   monthArray[4] = "May.";
   monthArray[5] = "Jun.";
   monthArray[6] = "Jul.";
   monthArray[7] = "Aug.";
   monthArray[8] = "Sep.";
   monthArray[9] = "Oct.";
   monthArray[10] = "Nov.";
   monthArray[11] = "Dec.";
}

function testDate()
{
   var nowDate = new Date();
   
   var day = nowDate.getDate();               //Sets day as the curent date  
   day = day.toString();                      //Converts day to a string so I can use substring
   
   var dayTest = day.substring(day.length-1); //Do this to get the last number in the date
   dayTest = parseInt(dayTest);               //Converts dayTest to a integer so I can do math with it
   
   document.write("the date is: " + nowDate + "<br />");
   document.write("Year: " + nowDate.getFullYear() + "<br />");
   document.write("Month: " + nowDate.getMonth() + "<br />");
   document.write("Date: " + nowDate.getDate() + "<br />");
   document.write("Day: " + nowDate.getDay() + "<hr />");
   
   document.write("dayArray: " + dayArray[nowDate.getDay()] + "<br />");
   document.write("monthArray: " + monthArray[nowDate.getMonth()] + "<hr />")
   
   //couldn't get it to work a switch, read online that switch isn't meant to be used this way and that I should use if.
   if(dayTest == 1) //checks  the last number in the date to see what letters should be added.
   {
      day += "st";
   }
   else if(dayTest == 2)
   {
      day += "nd";
   }
   else if(dayTest == 3)
   {
      day += "rd";
   }
   else if(dayTest > 3, dayTest < 10)
   {
      day += "th";
   }
   else
   {
      alert("broken");
   }
   
   document.write("Today is " + dayArray[nowDate.getDay()] + ", " + monthArray[nowDate.getMonth()] + " " + day + ", " + nowDate.getFullYear() + ".<hr />")
   
}






