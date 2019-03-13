//SALES IQ CODE
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"844b64031c3135be6310d4c9fe5013b3518ed43c1a839bcbdad43478a59c393570a46501a405cdc8dd9ce643715b5da0", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");

document.getElementById('submit').onclick = salesiq(); 
function salesiq() {
$zoho.salesiq.ready=function(embedinfo){
    var fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    $zoho.salesiq.visitor.name(fname);
    $zoho.salesiq.visitor.email(email);

}
};
