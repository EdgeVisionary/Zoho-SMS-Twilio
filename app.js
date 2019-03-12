
var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
console.log(url);
var startposition = (url.search("/Leads/"))
console.log(startposition)