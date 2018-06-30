/*
labExtractingFromCSV.js
Lab: Extracting from a CSV
Dustin Frandle - dafrandle@yahoo.com
Written - 4/5/2016

*/



function extractData()
{
   var data = "'461-59-6856','Yehbi's ','Oliweuf','31332','9'";
   
   //------------- efficient method vars -----------
   var dataArray = new Array(5);
   var startP = 1;
   var endP = 0;
   var arrayP = 0;
   var getNextFlag = true;
   
   //------------ cumbersome method vars -----------
   var first = "";
   var last = "";
   var ssn = "";
   var ySalary = 0;
   var yearEmployed = 0;
   
   var firstEnd = 0;
   var lastEnd = 0;
   var ssnEnd = 0;
   var ySalaryEnd = 0;
   var yearEmployedEnd = 0;
   
   //------ data -------
   document.write("<pre><h2>0123456789012345678901234567890123456789012345678901234567890123456789<br />");
   document.write(data + "<br /><hr />");
   
   //------------------------------------ cumbersome method -----------------------------------------
   document.write("cumbersome method<br /><br />");
   ssnEnd = data.indexOf("','");
   document.write("ssnEnd = " + ssnEnd + "<br />");
   ssn = data.substring(1,ssnEnd);
   document.write("ssn = " + ssn + "<br /><br />");
   ssnEnd += 3;
   
   lastEnd = data.indexOf("','", ssnEnd);
   document.write("lastEnd = " + lastEnd + "<br />");
   last = data.substring(ssnEnd,lastEnd);
   document.write("last = " + last + "<br /><br />");
   lastEnd += 3;
   
   firstEnd = data.indexOf("','", lastEnd);
   document.write("firstEnd = " + firstEnd + "<br />");
   first = data.substring(lastEnd,firstEnd);
   document.write("first = " + first + "<br /><br />");
   firstEnd += 3;
   
   ySalaryEnd = data.indexOf("','", firstEnd);
   document.write("ySalaryEnd = " + ySalaryEnd + "<br />");
   ySalary = data.substring(firstEnd,ySalaryEnd);
   document.write("ySalary = " + ySalary + "<br /><br />");
   ySalaryEnd += 3;
   
   yearEmployedEnd = data.indexOf("'", ySalaryEnd);
   document.write("yearEmployedEnd = " + yearEmployedEnd + "<br />");
   yearEmployed = data.substring(ySalaryEnd,yearEmployedEnd);
   document.write("yearEmployed = " + yearEmployed + "<br /><hr /></h2></pre>");
   yearEmployedEnd += 3;
   //--------------------------------------- cumbersome method end --------------------------------------------------
   //----------------------------------------- efficient method -----------------------------------------------------
   while(getNextFlag)
   {
      endP = data.indexOf("','",startP);
      if(endP > -1)
      {
         dataArray[arrayP] = data.substring(startP, endP);
         startP = endP + 3;
         arrayP++;
      }
      else
      {
         dataArray[arrayP] = data.substring(startP, data.length-1);
         getNextFlag = false;
      }
   }
   document.write("<h2>efficient method</h2><br /><br />");
   document.write("<table border ='1'><tr> <td>SSN </td> <td> Last Name </td> <td> Fisrt Name </td> <td> Salary (in USD) </td> <td> Years Employed</td> </tr>")
   document.write("<tr> <td>" + dataArray[0] + " </td><td> " + dataArray[1] + " </td><td> " + dataArray[2] + " </td><td>" + dataArray[3] + " </td><td> " + dataArray[4] + "</td></tr></table>")
   
}









