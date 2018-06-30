/*
mathLab.js
Lab: Math Functions
Dustin Frandle - dafrandle@yahoo.com
Written - 3/28/2016

*/


function displayMath()
{
    var num1 = 50.01;
    var num2 = 50.49;
    var num3 = 50.50;
    var num4 = 50.51;
    var num5 = 50.99;
    var myAbsolute = 0;
    var randomNum = 0;

   document.write("Value of " + num1 + " - " + num2 + " = " + (num1-num2) + "<br /><br />"); 
   myAbsolute = Math.abs(num1-num2);
   document.write("Absolute value" + "<br />");
   document.write("value of " + num1 + " - " + num2 + " = " + myAbsolute + "<br />");
   document.write("value of " + num1 + " - " + num2 + " (1st decimal) = " + myAbsolute.toFixed(1) + "<br />");
   document.write("value of " + num1 + " - " + num2 + " (3rd decimal) = " + myAbsolute.toFixed(3) + "<br />");
   document.write("value of " + num1 + " - " + num2 + " (5th decimal) = " + myAbsolute.toFixed(5) + "<hr />");
   
   document.write("<b>Math.ceil()</b><br />");
   document.write(num1 + " ceil( ) = " + Math.ceil(num1) + "<br />");
   document.write(num2 + " ceil( ) = " + Math.ceil(num2) + "<br />");
   document.write(num3 + " ceil( ) = " + Math.ceil(num3) + "<br />");
   document.write(num4 + " ceil( ) = " + Math.ceil(num4) + "<br />");
   document.write(num5 + " ceil( ) = " + Math.ceil(num5) + "<hr />");

   document.write("<b>Math.floor()</b><br />");
   document.write(num1 + " floor( ) = " + Math.floor(num1) + "<br />");
   document.write(num2 + " floor( ) = " + Math.floor(num2) + "<br />");
   document.write(num3 + " floor( ) = " + Math.floor(num3) + "<br />");
   document.write(num4 + " floor( ) = " + Math.floor(num4) + "<br />");
   document.write(num5 + " floor( ) = " + Math.floor(num5) + "<hr />");

   document.write("<b>Math.round()</b><br />");
   document.write(num1 + " round( ) = " + Math.round(num1) + "<br />");
   document.write(num2 + " round( ) = " + Math.round(num2) + "<br />");
   document.write(num3 + " round( ) = " + Math.round(num3) + "<br />");
   document.write(num4 + " round( ) = " + Math.round(num4) + "<br />");
   document.write(num5 + " round( ) = " + Math.round(num5) + "<hr />");
   
   document.write("<b>.max() and .min() </b><br />");
   document.write(num1 + " vs " + num2 + "<br />")
   document.write("max:" + Math.max(num1,num2) + "<br />")
   document.write("min:" + Math.min(num1,num2) + "<hr />")
   
   document.write("<b>Using Math.random( )</b><br />");
   randomNum = Math.random();
   document.write("randomNum = " + randomNum + "<br />");

   document.write("<b>Draw (don't gamble it's not good for your bank account.)</b><br />")
   cardArray = new Array("2","3","4","5","6","7","8","9","10","J","Q","K","A");
   for(x=0; x<5; x++)
   {
   randomNum = Math.random( );
   randomNum = Math.floor(randomNum * 13);
   document.write(cardArray[randomNum] + "<br />");
   }
}









