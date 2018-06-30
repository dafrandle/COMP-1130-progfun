/*
prjJSintro.js
Purpose: Homepage that shows my ability to make code
Dustin Frandle - dafrandle@yahoo.com
Project: JS Intro
Written - Jan 29th 2016

*/

var iD   //declares iD as a variable.

function getUserID()    //Asks for ID.
{
   iD = prompt("what is your school ID number?", "12640320")  
}

function displayUserID()   //Writes the value for iD on the webpage.
{
   document.write("Welcome student " + iD)    
}