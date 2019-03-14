$zoho.salesiq.ready=function(embedinfo){
    $("#submit").click(function() {
        var fname = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        $zoho.salesiq.visitor.name(fname);
        $zoho.salesiq.visitor.email(email);
        console.log("SENT DETAILS");
    });
    }
