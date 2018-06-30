/*
prjJSArray.js
Purpose: make a 2d array
Dustin Frandle - dafrandle@yahoo.com
Project: Array
Written - 3/22/2016

*/

var shippingLevel = new Array(4); //holds the shipping speed
var parcelType = new Array(4); //holds the parcel type
var temp = new Array(4);



function populate() //gives the arrays data
{
   shippingLevel[0] = "No-Rush";
   shippingLevel[1] = "Standard";
   shippingLevel[2] = "Expedited";
   shippingLevel[3] = "Rush";
   parcelType[0] = "Letter";
   parcelType[1] = "Small Parcel";
   parcelType[2] = "Large Parcel";
   parcelType[3] = "Pallet";
   
   for(var x=0; x<temp.length; x++)
   {
      temp[x] = new Array(4);
   }
   //[Shipping][Parcel]
   temp[0][0] = "0.30"; //row 1 No-Rush
   temp[0][1] = "3.59";
   temp[0][2] = "15.69";
   temp[0][3] = "65.89";
   
   temp[1][0] = "0.47"; //row 2 Standard
   temp[1][1] = "6.68";
   temp[1][2] = "22.00";
   temp[1][3] = "110.55";
   
   temp[2][0] = "0.68"; //row 3 Expedited
   temp[2][1] = "12.57";
   temp[2][2] = "45.28";
   temp[2][3] = "165.68";
   
   temp[3][0] = "1.20"; //row 4 Rush
   temp[3][1] = "20.00";
   temp[3][2] = "89.69";
   temp[3][3] = "213.54";
}



function writeTable() //replaces the show table button with the table
{
   var table = "Error!"
   table = ("<div id='tableBody'>");
   table +=("<p> Shipping Costs Table <br /> Calculated in USD </p>");
   table +=("<table id='table' border ='1'><tr>");
   table +=("<td style='padding: 3px;'>Parcel Type</td>")
   for(x=0; x<shippingLevel.length; x++)
   {
      table +=("<td style='padding: 3px;'>" + shippingLevel[x] + "</td>");
   }
   table +=("</tr>");                 //----------------------- top of table -----------------------\
   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
   for(row=0; row<temp.length; row++) //----------------- side & data of table ---------------------/
   {
      table +=("<tr><td style='padding: 3px;'>" + parcelType[row] + "</td>");
      for(col=0; col<temp[0].length; col++)
      {
         table +=("<td style='padding: 3px;'>" + temp[col][row] + "</td>");
      }
      table +=("</tr>");
   }
   table +=("</table>");
   table +=("</div>");
   document.getElementById("tableButton").innerHTML = table;
}



function shippingSwap() //replaces Select Shipping with No-Rush in the Shipping parcelType Calculator box
{
   document.getElementById("shippingLevelSwitch").innerHTML = "No-Rush";
}



function parcelSwap() //replaces Select Parcel Type with Letter in the Shipping parcelType Calculator box
{
   document.getElementById("parcelTypeSwitch").innerHTML = "Letter";
}



function calculateShippingCost() // gets the shipping cost by checking the two drop down boxes
{
   var shipping = document.getElementById("shippingLevelDrop").value;
   var parcel = document.getElementById("parcelTypeDrop").value;
   
   switch(shipping)
   {
      case "No-Rush":
      shipping = 0;
      break;
      
      case "Standard":
      shipping = 1;
      break;
      
      case "Expedited":
      shipping = 2;
      break;
      
      case "Rush":
      shipping = 3;
      break;
   }
   switch(parcel)
   {
      case "Letter":
      parcel = 0;
      break;
      
      case "Small Parcel":
      parcel = 1;
      break;
      
      case "Large Parcel":
      parcel = 2;
      break;
      
      case "Pallet":
      parcel = 3;
      break;
   }
   
   document.getElementById("answer").innerHTML = "$" + temp[shipping][parcel];
}



function buttonClick() //Calls calculateShippingCost() shippingSwap() parcelSwap() when the Calculate button is clicked so if the user didn't touch the drop downs it doesn't look stupid.
{
   shippingSwap();
   parcelSwap();
   calculateShippingCost();
}