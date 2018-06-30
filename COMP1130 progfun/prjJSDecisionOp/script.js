/*
script.js
Purpose: Medical Database system
Dustin Frandle - dafrandle@yahoo.com
Project: Decision Operator
Written - 2/29/2016

------------------------------------------------------------------------------------------------------*/



function isValidUser()  //checks to see if login info is correct
{
   var userID = document.getElementById("idInput").value; //gets the user id
   var pass = document.getElementById("passInput").value; //gets the password
   var returnID = (userID == "mayo")? true : false;       //checkes the information and returns true or false
   var returnPass = (pass == "Please99!")? true : false;
   if(returnID != true || returnPass != true)             //checks if both variables aren't true and then tells the user to try again, or calls login() after 3 seconds if they are correct
   {
      document.getElementById("error").innerHTML = "Please use a valid User ID and/or Password";
   }
   else
   {
      document.getElementById("error").innerHTML = "Redirecting in 3 seconds";
      setTimeout('login()',3000)
   }
}



//----------------------------------------------------------------------------------------------------



function login() //redirects you to registration.html
{
   window.location.assign("registration.html")
}



function logout() //redirects you to index.html
{
   window.location.assign("index.html")
}



function nurse() //replaces Select Specialty with Nurse in the doctorType select box
{
   document.getElementById("nurse").innerHTML = "Nurse";
}



function checkup() //replaces Select Condition with Checkup in the lungsHeartENT select box
{
   document.getElementById("checkup").innerHTML = "Checkup";
}



//--------------------------------------------------------------------------------------------------------- 
   


function processTheData()
{
   var first = document.getElementById("patientFirst").value;    //declares (and sets) all the variables needed to build the page
   var last = document.getElementById("patientLast").value;      //
   var staff = document.getElementById("doctorName").value;      //
   var weight = document.getElementById("patientWeight").value;  //
   var height = document.getElementById("patientHeight").value;  //
   var visitList = document.getElementById("lungsHeartENT");     //Finds the lungs Heart ENT drop down
   var vistReason = visitList.value;                             //Gets the vaule it was set to
   
   var doctorList = document.getElementById("doctorType");  //finds the doctor drop down
   var docterType = doctorList.value;                       //finds the setting its set to
   var doctorName = "Nurse";                                //sets a default just in-case
   var isHeartDocter = 0;                                   //flag that will be trigged if the staff is a heart doctor (Cardiologist)
   
   switch(docterType)   //sets the doctor's name using a switch
   {
      case "Nurse":
      docterName = "Nurse";
      isHeartDocter = 0;
      break;
      
      case "Cardiologist":
      docterName = "Cardiologist";
      isHeartDocter = 1;
      break;
      
      case "Pulmonologist":
      docterName = "Pulmonologist";
      isHeartDocter = 0;
      break;
      
      case "Otolaryngologist":
      docterName = "Otolaryngologist";
      isHeartDocter = 0;
      break;
   }
   
   var isNurse = (docterType == "Nurse")? "" : "Dr. ";           //checks to see if the staff is a nurse, removes the "Dr." if so.
   var bMI = calcBMI(weight,height);                             //calulates the BMI
   
   // prints the document onto the page with innerHTML
   document.getElementById("data").innerHTML = '<h1 style="float: left;">' + isNurse + staff + ' </h1><h1 style="float: right;"> ' + docterType + ' </h1><br /><br /><br /><br /><br /><hr /><h1 style="text-align: center;">Patient</h1><h1 style="text-align: center;"> ' + first + ' ' + last + ' </h1><hr /><br /><br /><br /><h1 style="float: right; margin-right:150px;">Case Notes:</h1><br /><br /><br /><br /><br /><p style="float: right; width: 400px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sollicitudin justo. Cras consectetur eros in lobortis fringilla. In hac habitasse platea dictumst. Pellentesque in felis fermentum, vehicula erat quis, sodales nisi. Pellentesque aliquet convallis urna, vel efficitur magna. Maecenas molestie feugiat molestie. Nullam pretium felis ut felis dictum dictum. Integer eget imperdiet libero. Donec vehicula erat turpis, id hendrerit tortor pulvinar eget. Curabitur faucibus dapibus pharetra. Aliquam tristique risus cursus, rhoncus quam vitae, gravida orci. Nullam molestie at tortor sed vulputate. Ut sodales posuere lacinia. Nullam feugiat euismod nibh.<br /><br />BMI Categories<br />Underweight = <18.5<br />Normal weight = 18.5–24.9<br />Overweight = 25–29.9<br />Obesity = BMI of 30 or greater</p><h1 style="float: left;">Weight: ' + weight + ' Pounds<br />Height: ' + height +  ' Inches<br />BMI: ' + bMI + ' <br />Visit Reason: ' + vistReason + ' <br /></h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><hr />';
   if(isHeartDocter == 1)
   {
      printEKG();
   }
}




function calcBMI(weight,height) //calculates BMI
{
   var weight;
   var height;
   var bMI = parseFloat((weight / (height * height)) * 703);
   return bMI;
}



function printEKG() //prints "EKG/Treadmill Test Notes" and 7 lines that skip by 5 after the first one.
{
   document.getElementById("ekgName").innerHTML = "<h1>EKG/Treadmill Test Notes</h1><br />";
   for(var count = 0; count < 31; count++)
   {
      var result = (count == 0)?"1":(count);
      if(count %5 == 0)
      {
         document.getElementById("ekg").innerHTML += result + "<b>._____________________</b><br /><br />";
      }
   }
}