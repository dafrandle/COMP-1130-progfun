/*
array.js
Lab: Array
Dustin Frandle - dafrandle@yahoo.com
Project:
Written - 3/14/2016

*/



function getRoster()
{
   var teamArray = new Array(4);
   teamArray[0] = "Albert";
   teamArray[1] = "Abe";
   teamArray[2] = "Grace";
   teamArray[3] = "Eleanor";
   
   for(x=0; x<teamArray.length; x++)
   {
      teamArray[x] = prompt("Please enter employee #" + (x+1), teamArray[x]);
   }  
   showArray(teamArray);
}




function showArray(teamArray)
{
   for(x=0; x<teamArray.length; x++)
   {
      document.write("employee #" + (x+1) + ": " + teamArray[x] + "<br />");
   }
}



