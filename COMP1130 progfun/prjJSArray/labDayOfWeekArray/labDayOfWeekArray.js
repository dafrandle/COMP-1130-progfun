/*
labDayOfWeekArray.js
Lab: Day Of Week Array
Dustin Frandle - dafrandle@yahoo.com
Written - 3/20/2016

*/


var dayOfWeekArray = new Array(7);


function createDayOfWeekArray() //I stopped following the tutorial at this point because i knew what to do and the creative writing in the tutorial threw me off
{
   dayOfWeekArray[0] = "Sun";
   dayOfWeekArray[1] = "Mon";
   dayOfWeekArray[2] = "Tue";
   dayOfWeekArray[3] = "Wed";
   dayOfWeekArray[4] = "Thu";
   dayOfWeekArray[5] = "Fri";
   dayOfWeekArray[6] = "Sat";
}

function displayDayOfWeek() 
{
   for(x=0; x<dayOfWeekArray.length; x++)
   {
      document.write("<td>" + dayOfWeekArray[x] + "</td>");
   }
}

function displayTable()
{
   var dateCounter = 1;
   createDayOfWeekArray()
   document.write("<table border ='1' >");
   document.write("<tr>");
   displayDayOfWeek()
   document.write("</tr>");
   for(row=0; row<5; row++)
   {
      document.write("<tr>");
      for(col=0; col<7; col++)
      {
         if(dateCounter > 31)
         {
             document.write("<td>&nbsp;</td>");
         }
         else
         {
            document.write("<td>" + (dateCounter++) + "</td>");
         }
      }
      document.write("</tr>");
   }
   document.write("</table>");
}