/*
prjJSStringDateForm.js
Purpose: use string functions
Dustin Frandle - dafrandle@yahoo.com
Project: String Date Form
Written - 4/6/2016

*/

function main()
{
   var id = document.getElementById("userID").value;
   var nameArray = new Array(3);
   var phoneN = document.getElementById("phoneNum").value; //geting data
   var dob = document.getElementById("dob").value;
   var idIsValid = validateID(id); //runs validation
   var phoneIsValid = validatePhone(phoneN); //runs validation
   var error = false
   
   
   
   nameArray[0] = document.getElementById("userName").value;
   nameArray[1] = document.getElementById("userNameM").value;
   nameArray[2] = document.getElementById("userNameL").value;
   
   
   
   if(idIsValid == true) //gets the results from id validation and runs display id if true was the result.
   {
      id = reformatID(id);
      displayID(id);
   }
   else // otherwise it runs clearMsg to remove the member id and makes the error flag true so buildMemberNumber doesn't run, also posts error message for id
   {
      clearMsg()
      document.getElementById("userIdResponse").innerHTML = "Your ID must be 10 digits long and consist only of numbers";
      error = true;
   }
   
   if(phoneIsValid == false)//checks if the phone validation failed, takes same action as when id fails, post the error message for the phone section though
   {
      clearMsg()
      document.getElementById("phoneNumResponse").innerHTML = "please use the correct format: (###)###-####";
      error = true;
   }
   else// runs clearMsg to clear out error mesages
   {
      clearMsg();
   }
   
   displayDOB(dob);
   
   if(error == true) //checks the error flag if its true buildMemberNumber doesn't run and a error message is posted instead
   {
      document.getElementById("memberID").innerHTML = "Please fill out all boxes correctly";
   }
   else
   {
      buildMemberNumber(id,nameArray,phoneN);
   }
}

//---------------------------------------------------------------------------------------------- Reformat --------------------------------

function reformatID(id)
{
   var startP = 0;
   var endP = 3;
   var idFinal = id.substring(startP, endP); //concatenates reformatted id together using substring
   idFinal += "-";
   startP += 3;
   endP += 3;
   idFinal += id.substring(startP, endP);
   idFinal += "-";
   startP += 3;
   endP += 4;
   idFinal += id.substring(startP, endP);
   return idFinal;
}



function buildMemberNumber(id,nameArray,phoneN)
{
   var mebID = "error!";
   
   mebID = id.substring(0,3); 
   mebID += nameArray[0].substring(0,3).toLowerCase();
   mebID += nameArray[2].substring(nameArray[2].length - 4).toUpperCase();//concatenates member id together using substring
   mebID += phoneN.substring(5,8);
   
   displayMemberNumber(mebID);
   
}

//---------------------------------------------------------------------------------------------- Display --------------------------------

function displayID(id)
{
   document.getElementById("userIdResponse").innerHTML = "Your ID is: " + id;
}



function displayDOB(dob)
{
   var dayArray = new Array(7);
   var monthArray = new Array(12);
   var year = parseInt(dob.substring(0,4));
   var month = parseInt(dob.substring(5,7)-1); //turns the date string into a date variable that javascript date functions can use
   var day = parseInt(dob.substring(8));
   var date = new Date(year,month,day)
   
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
   
   dob = dayArray[date.getDay()] + ", ";
   dob += monthArray[date.getMonth()] + " "; //concatenates date of birth sentience together
   dob += date.getDate()  + ", ";
   dob += date.getFullYear();
   
   document.getElementById("dobResponse").innerHTML = dob;
   
}



function displayMemberNumber(mebID)
{
   document.getElementById("memberID").innerHTML = mebID;
}

//---------------------------------------------------------------------------------------------- Validation -------------------------------

function validateID(id)
{
   var x = 0;
   var v = true;
   
   if(id.length < 10 || id.length > 10) //checks length
   {
      v = false;
   }
   else
   {
      for(v==true;x<10;) //checks contents, uses a for loop becuse there is a lot to check
      {
         if(id.charAt(x) != "1"&&id.charAt(x) != "2"&&id.charAt(x) != "3"&&id.charAt(x) != "4"&&id.charAt(x) != "5"&&id.charAt(x) != "6"&&id.charAt(x) != "7"&&id.charAt(x) != "8"&&id.charAt(x) != "9"&&id.charAt(x) != "0")
         {
            v=false;
            x = 10;
         }
         else
         {
            x++;
         }
      }
   }
   return v; //if it has a correct length and contents returns true if not false
}



function validatePhone(phoneN)
{
   var v = true;
   
   if(phoneN.length < 13 || phoneN.length > 13)//checks length
   {
      v=false;
   }
   else//checks contents
   {
      if(phoneN.charAt(0) != "(" && phoneN.charAt(4) != ")" && phoneN.charAt(8) != "-")
      {
         v=false;
      }
   }
   return v;
}

//---------------------------------------------------------------------------------------------- Errors -------------------------------

function clearMsg()
{
   document.getElementById("phoneNumResponse").innerHTML = "";
   document.getElementById("memberID").innerHTML = "";
}
