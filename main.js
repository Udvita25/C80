storenames=[];
function submit() {

var tempnames=[];
for(var j=1;j<=4;j++){
var storevalue=document.getElementById("name_of_the_student_"+j).value
storenames.push(storevalue);
}   
var lengthnames=storenames.length;
for(var cn=0;cn<lengthnames;cn++){
tempnames.push("<h4>NAME: "+storenames[cn]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=tempnames;
var removecommas=tempnames.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
storenames.sort();
var display1=[];
var length1=storenames.length;
for(var len=0;len<length1;len++)
{display1.push("<h4>NAME: "+storenames[len]+"</h4>");}
var removecommas=display1.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
}