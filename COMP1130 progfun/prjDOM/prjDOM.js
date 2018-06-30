/*
prjDOM.js
Purpose: Utilize the DOM
Dustin Frandle - dafrandle@yahoo.com
Project: DOM
Written - 4/12/2016

*/


function colorCode() //color is a verb -- just coveing all my bases
{
   if(!document.getElementsByTagName || !document.createElement) return; //checks if browser can run this code also uses a ternary 
   
   var wholeDocument = document;                             //gets the document
   var paragraphArray = document.getElementsByTagName("p");  //finds ALL <p> elements and puts them in an array
   var webLink = document.createElement("a");                //makes an <a> element
   var blurb = document.createTextNode("Link to my site on the t.server (web 4 biz)"); //makes the text data for webLink
   var insertSpot = document.getElementById("pasteLink");    // finds the div where the link is pasted
   insertSpot.innerHTML = "";
   
   /*Left this here to let you see my thought processes.
   z = x % y | x = x in loop | y = 2 | z = 1 or 0 for assigning odd or even ||| variablename = (condition) ? true:false
                                                                                variablename = (x % 2 == 0) ? even:odd*/
   for(x=0;x<paragraphArray.length;x++) //for loop
   {
      colorPick  = (x % 2 == 0) ? "even":"odd";          //ternary with modulus to get even or odd
      paragraphArray[x].setAttribute("class", colorPick);//adds a class attribute to each element
   }
   
   webLink.setAttribute("href", "http://dustinf.t.southcentral.edu/"); //gives webLink a site to link to
   webLink.appendChild(blurb);                                         //adds the text data to webLink
   insertSpot.appendChild(webLink);                                    //posts webLink to the div insertSpot
   
}