var display=document.getElementById("display");
var buttons=document.getElementsByClassName("digit");
var operand1=null;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++){
buttons[i].addEventListener("click",function(){
var value=this.getAttribute("data-value");
   if(value=="1"||value=="2"||value=="3"||value=="4"||value=="5"||value=="6"||value=="7"||value=="8"||value=="9"||value=="0"||value=="."){
   display.innerText+=value;
  }
else if(value=="+"||value=="-"||value=="*"||value=="%"||value=="/"){
operator=value;
if(display.innerText==""){
display.innerText="Error";
return;
}
operand1=display.innerText;
operand1=parseFloat(operand1);
display.innerText="";
}
else if(value=="="){
  operand2=display.innerText;
  operand2=parseFloat(operand2);
  var ans=eval("operand1" +operator +"operand2");
  display.innerText=ans;
}
else if(value=="AC"){
display.innerText="";
}





});
}



























// var op1=null;
// var op2=null;
// var opr=null;
// var val1=0;
// var val=2;
// var show=document.getElementById("display");
// var buttons=document.getElementsByClassName("digit");
// for(var i=0;i<buttons.length;i++){
// buttons[i].addEventListener("click",function(){
// var data=this.getAttribute("data-value");
// if(data=="1"||data=="2"||data=="3"||data=="4"||data=="5"||data=="6"||data=="7"||data=="8"||data=="9")
// {
//   show.innerText+=data;
//   console.log(show.innerText);
// }
//
// else if(data=="/"||data=="*"||data=="+"||data=="-"||data=="%"){
// op1=show.innerText;
// val1=parseFloat(op1);
// opr=data;
// console.log("operand1="+" "+val1+" "+"operator= "+opr);
//
// }
// else if(data=="="){
//
// op2=show.innerText;
//
// }
// });
// }
