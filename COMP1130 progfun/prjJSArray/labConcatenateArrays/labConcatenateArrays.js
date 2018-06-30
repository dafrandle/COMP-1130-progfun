/*
labConcatenateArrays.js
Lab: Concatenate Arrays
Dustin Frandle - dafrandle@yahoo.com
Written - 3/20/2016

*/

var janJuneArray = new Array(6);
var julyDecArray = new Array(6);
var wholeYearArray = new Array(12);

function populate() //I made this because when i had the arrays assigned outside of a function it broke
{
   janJuneArray[0] = "January";
   janJuneArray[1] = "February";
   janJuneArray[2] = "March";
   janJuneArray[3] = "April";
   janJuneArray[4] = "May";
   janJuneArray[5] = "June";
   julyDecArray[0] = "July";
   julyDecArray[1] = "August";
   julyDecArray[2] = "September";
   julyDecArray[3] = "October";
   julyDecArray[4] = "November";
   julyDecArray[5] = "December";
   wholeYearArray = janJuneArray.concat(julyDecArray);
   wholeYearArray = wholeYearArray.sort();
   displayArray(wholeYearArray);
}

function displayArray(wholeYearArray) //I wonder why you want us to call it this way, as it is a global variable it is unnecessary
{
   document.write("<b>The contents of wholeYearArray are:</b><hr />");
   for(x=0; x<wholeYearArray.length; x++)
   {
      document.write(wholeYearArray[x] + "<br />");
   }
}