$zoho.salesiq.ready=function(embedinfo){
    jQuery(document).ready(function(){
            console.log("SALESIQ READY STATE")
            jQuery(document).on('gform_confirmation_loaded', function(){
            console.log("GFORM SUBMISSION TRIGGER");
            var fname = document.getElementById('input_1_1').value;
            var lname = document.getElementById('input_1_2').value;
            var email = document.getElementById('input_1_3').value;
            var phone = document.getElementById('input_1_4').value;
            var profile = document.getElementById('input_1_5').value;
            var config = document.getElementById('input_1_6').value;
            var postcode = document.getElementById('input_1_7').value;
            var suburb = document.getElementById('input_1_8').value;
            var name = fname + " " + lname;
            $zoho.salesiq.visitor.name(name);
            $zoho.salesiq.visitor.email(email);
            $zoho.salesiq.visitor.info({"Phone" : phone, "Enquiry_Type": profile, "Configuration" : config, "Postcode" : postcode, "Suburb" : suburb, "Lead_Source" : "Website"});
            console.log("SENT DETAILS");
            });
        })
    }
    
$zoho.salesiq.ready=function(embedinfo){
    console.log("SALES IQ READY");
        document.getElementById('gform_submit_button_1').onclick{
            console.log("GFORM SUBMISSION TRIGGER");
            var fname = document.getElementById('input_1_1').value;
            var lname = document.getElementById('input_1_2').value;
            var email = document.getElementById('input_1_3').value;
            var name = fname + " " + lname;
            $zoho.salesiq.visitor.name(name);
            $zoho.salesiq.visitor.email(email);
            console.log("SENT DETAILS");
            });
        })
    }