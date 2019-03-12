var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
console.log(url);
var startposition = (url.search("/Leads/") + 7);
console.log(startposition);
var leadID = url.slice(startposition,);
console.log(leadID);
var lastchar = leadID.substr(-1);
if(lastchar = "/"){
  leadID = leadID.slice(0,-1);
  console.log("HAD A BACKSLASH");
  console.log(leadID)
}
$("#submit").click(function(){
  var message = document.getElementById("Message").value;
  var phone = document.getElementById("Project").value;
  $.post("https://hooks.zapier.com/hooks/catch/2654049/n6ox3t",
  {
    "ID": leadID,
    "Message": message,
    "Project": phone
  },
  );
  console.log("SENT");
});
$("#cancel").click(function(){
window.location.href=url;
});