/*
stringLab.js
Lab: String Functions
Dustin Frandle - dafrandle@yahoo.com
Written - 3/28/2016

*/

var myName = new String("The Doctor");
var myAddress = new String("42 wibbly wobbly-timey wimey st.");
var myCityStateZip = new String("TARDIS, Gallifrey 101010");
var myPhone = new String("(555)555-5555");

function demoString()
{
   var isValid = false;
   var spaceIndex = -1;
   var indexPointer = 0;
   var userInput = "";
   var loopAgain = true;
   
   document.write("<pre><br /><h3>");
   document.write("012345678901234567890123456789012345678901234567890123456789<br />");
   document.write(myName + "<br />");
   document.write(myCityStateZip + "<br />");
   document.write("</pre><br />");
   
   document.write("length of myName: " + myName.length + "<br /><br />")
   document.write("length of myCityStateZip: " + myCityStateZip.length + "</h3><br /><hr />")
   
   document.write("<h2> check address with charAt() (because phone number is all 5s)")
   document.write("<pre><br />");
   document.write("012345678901234567890123456789012345678901234567890123456789<br />");
   document.write(myAddress + "<br />");
   document.write("</pre><br />");
   document.write("The character in the first position (index 0) is: "  + myAddress.charAt(0) + "<br />");
   document.write("The character in the 17th position (index 16) is: " + myAddress.charAt(16) + "</h2><br />");
   
   document.write("Phone: " + myPhone + "<br />");
   isValid = false;
   if(myPhone.charAt(0) == "(" && myPhone.charAt(4) == ")")
   {
      isValid = true;
   }
   else
   {
      isValid = false;
   }
   document.write("The phone number " + myPhone + " " );
   document.write( isValid ? "is valid.": "is NOT valid");
   document.write("<hr />");
   
   
   indexPointer = 0;
   document.write("<b>while Loop look at address</b><br />")
   while(indexPointer > -1)
   {
      spaceIndex = myAddress.indexOf(" ", indexPointer);
      if(spaceIndex == -1)
      {
      document.write("No more spaces located in this string.<hr />")
      indexPointer = spaceIndex;
      }
      else
      {
      document.write("There is a space at index #: " + spaceIndex + "<br />");
      indexPointer = spaceIndex+1;
      }
   } 
   spaceIndex = myName.indexOf(" ");
   firstName = myName.substr(0,spaceIndex);
   document.write("First part of myName is: " + firstName + "<br />");
   document.write("<hr />");
   indexPointer = 0;
   document.write("<b>using a loop</b><br />")
   while(indexPointer > -1)
   {
      spaceIndex = myAddress.indexOf(" ", indexPointer);
      if(spaceIndex == -1)
      {
         document.write(myAddress.substr(indexPointer) + "<br />");
         document.write("No more spaces located in this string.<hr />")
         indexPointer = spaceIndex;
      }
      else
      {
         document.write(myAddress.substr(indexPointer, (spaceIndex - indexPointer)) + "<br />");
         indexPointer = spaceIndex+1;
      }
   }
   
   loopAgain = true;
   while(loopAgain)
   {
      userInput = prompt("Would you like to loop? [y?]", "Y");
      if(userInput.toLowerCase( ) == "y")
      {
         document.write("loooooooooooooooooooop !<br />")
      }
      else
      {
         loopAgain = false;
         document.write("bout time.<br />");
      }
   }
}




   