/*
conversion.js
Purpose: Find the circumference of a circle from the radius.
Dustin Frandle - dafrandle@yahoo.com
Project: Variable Function
Written - 2/10/2016

*/

var radius;  //declares radius
var answer;  //declares answer

function getInput()
{
   //to see decimals (and to multiply by pi) float HAS to be used 
   radius = parseFloat(document.getElementById("radiusInput").value)  //makes "radius" whatever the user enters into the form
   calculate()                                                        //calls calculate to do the math
   document.getElementById("ans").innerHTML = "You set the radius as: " + radius + "<br />The circumference is: " + answer;   //writes the answer on the page
}

function calculate()
{
   answer = parseFloat(2 * 3.14159 * radius)  //finds the circumference and makes "answer" equal to it
}

