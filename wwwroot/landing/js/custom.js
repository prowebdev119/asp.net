/*$("#preload").click(function () {
    alert("Handler for .click() called.");
});*/

var Core = (function () {
    var _init = function () {

    }

    var _initContact = function () {
        
        var validator = $("#contactus_form").validate({
            errorPlacement: function (error, element) { }
        });

        $('#contactus_form_submit').click(function () {
            $("#cptch").removeClass("error");
            
            if ($("#contactus_form").valid() && grecaptcha.getResponse() != '') {                

                $.ajax({
                    url: "https://forms.theproficientlab.com/theproficientlab/form/Contactus/formperma/foxyx6RZaapWxzSqTsL-co_NCz8RXWueDyvH8ND8c84/htmlRecords/submit",
                    type: 'POST',
                    data: $('#contactus_form').serialize(),
                    beforeSend: function () {
                        $(".form").fadeTo('normal', '0.2');
                    },
                    complete: function (jqXHR, textStatus) {
                        $(".form").hide();
                        $(".thankyou").fadeTo('fast', '1');

                        setTimeout(function () {
                            $('#contactus_form')[0].reset();
                            validator.resetForm();
                            grecaptcha.reset();

                            $(".thankyou").fadeTo('normal', '0.2');
                            $(".thankyou").hide();
                            $(".form").fadeTo('fast', '1');
                        }, 5000)
                    }
                });
            }
            else {
                if (grecaptcha.getResponse() == '')
                    $("#cptch").addClass("error")
            }
        });
    }

    var _clearCaptchaError = function () {
        $("#cptch").removeClass("error");
    }

    return {
        Init: _init,
        InitContact: _initContact,
        ClearCaptchaError: _clearCaptchaError
    }
})();

