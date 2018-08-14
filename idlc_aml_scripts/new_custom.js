


function isIdlcEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('#mobile_no').focusout(function(e){
    var mobile_number = $('input[name=mobile_no]').val();
    var mobile_number_pref_valid = ['017','016','015','018','019'];
    var _token = $('input[name=_token]').val();
    if(!$.isNumeric(mobile_number) && mobile_number.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only Number is allowed.");
        $("#mobile_no").val("").focus();
    }else if(mobile_number.length != 11  && mobile_number.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only allowed Eleven Digit.");
        $("#mobile_no").focus();
    }else if(mobile_number.length == 11 ){
        var mobile_number_pref = mobile_number.substr(0, 3);
        if($.inArray(mobile_number_pref, mobile_number_pref_valid) == -1){
            $('.validation_error_msg').empty();
            $('.alert-danger').hide();
            $('.modal .alert-danger').show();
            $('#unique_input_error').modal('show');
            $('.validation_error_msg').append("Please Input Valid Mobile Number(017..,018..,019...,016...,015...)");
            $("#mobile_no").val("").focus();
        }else{
            $.ajax({
                type: "POST",
                url: "/aml/value/check/mobile",
                data: {mobile_number: mobile_number, _token:_token},
                datatype: 'json',
                cache: false,
                async: false,
                success: function (result) {
                    if(result.status == 'exists' && $('.mobile_no_box .alert-danger').length == 0){
                        $('.validation_error_msg').empty();
                        $('.alert-danger').hide();
                        $('.modal .alert-danger').show();
                        $('#unique_input_error').modal('show');
                        $('.validation_error_msg').append(result.message);
                        $("#mobile_no").val("").focus();

                    }else if(result.status == 'unique'){
                        // for input lebel
                        $('.mobile_no_box .alert-danger').remove();

                        // for modal
                        $('#unique_input_error').modal('hide');
                    }
                },
                error: function (result) {
                    $('.validation_error_msg').empty();
                    $('.alert-danger').hide();
                    $('.modal .alert-danger').show();
                    $('#unique_input_error').modal('show');
                    $('.validation_error_msg').append("The Mobile Number Is Not Valid");
                    $("#mobile_no").val("").focus();
                }
            });
        }
    }else if(mobile_number == ''  && mobile_number.length > 0) {
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("You can not leave with empty Value.");
        $('#mobile_no').val("").focus();
    }else{
        // for modal
        $('#unique_input_error').modal('hide');

        // for input lebel
        $('.mobile_no_box .alert-danger').remove();
    }
});




$('#email').focusout(function(e){
    var email = $('#email').val();
    var _token = $('input[name=_token]').val();

    if(isIdlcEmail(email))
    {
        $('#unique_input_error').modal('hide');
        $.ajax({
            type: "POST",
            url: "/aml/value/check/email",
            data: {email: email, _token:_token},
            datatype: 'json',
            cache: false,
            async: false,
            success: function (result) {
                if(result.status == 'exists' && $('.email_box .alert-danger').length == 0){
                    $('.validation_error_msg').empty();
                    $('.alert-danger').hide();
                    $('.modal .alert-danger').show();
                    $('#unique_input_error').modal('show');
                    $('.validation_error_msg').append(result.message);
                    $('#email').val("").focus();

                }else if(result.status == 'unique'){
                    $('.email_box .alert-danger').remove();
                }
                
            },
            error: function (result) {
                $('.validation_error_msg').empty();
                $('.alert-danger').hide();
                $('.modal .alert-danger').show();
                $('#unique_input_error').modal('show');
                $('.validation_error_msg').append("Please Input Valid Email Address.");
                $('#email').val("").focus();
            }
        });
    }else if(email == '' && email.length > 0) {
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("You can not leave with empty Value.");
        $('#email').val("").focus();
    }else if(email.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Please Input Valid Email Address.");
        $('#email').focus();
    }
});





$('#national_id_card_no').focusout(function(e){
    var national_id_card_no = $('#national_id_card_no').val();
    var _token = $('input[name=_token]').val();
    var valid_nid_len = [10,13,17];
    var nid_len = national_id_card_no.length;
    if(national_id_card_no == '' && national_id_card_no.length > 0) {
           $('.validation_error_msg').empty();
           $('.alert-danger').hide();
           $('.modal .alert-danger').show();
           $('#unique_input_error').modal('show');
           $('.validation_error_msg').append("You can not leave with empty Value.");
           $('#national_id_card_no').val("").focus();
    }else if($.inArray(nid_len, valid_nid_len) == -1 && national_id_card_no.length > 0)
    {
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only allowed 10,13,17 digit.");
        $("#national_id_card_no").val("").focus();
    }else if(!$.isNumeric(national_id_card_no) && national_id_card_no.length > 0)
    {
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only Number is allowed.");
        $("#national_id_card_no").val("").focus();
    }else{
        // for modal
        $('#unique_input_error').modal('hide');

        $.ajax({
            type: "POST",
            url: "/aml/value/check/national_id_card_no",
            data: {national_id_card_no: national_id_card_no, _token:_token},
            datatype: 'json',
            cache: false,
            async: false,
            success: function (result) {
                if(result.status == 'exists' && $('.nid_box .alert-danger').length == 0){              
                    // For Modal
                    $('.validation_error_msg').empty();
                    $('.alert-danger').hide();
                    $('.modal .alert-danger').show();
                    $('#unique_input_error').modal('show');
                    $('.validation_error_msg').append(result.message);
                    $('#national_id_card_no').val("").focus();            
                }else if(result.status == 'unique'){
                    $('.nid_box .alert-danger').remove();
                }
            },
            error: function (result) {
                $('.validation_error_msg').empty();
                $('.alert-danger').hide();
                $('.modal .alert-danger').show();
                $('#unique_input_error').modal('show');
                $('.validation_error_msg').append("NID Is Not Valid");
                $('#national_id_card_no').val("").focus();  
            }
        });
    }
});


$(function () {
    var dt = new Date();
    dt.setFullYear(new Date().getFullYear()-18);

    $('#date_of_birth').datepicker(
        {
            viewMode: "years",
            format: 'dd/mm/yyyy',
            autoclose: true,
            endDate : dt
        }
    );
});


$('#date_of_birth').focusout(function(e){
    var date_of_birth = $('#date_of_birth').val();
    var _token = $('input[name=_token]').val();
    if(date_of_birth != ''){
        if((typeof date_of_birth.split("/")[0] != "undefined") && (typeof date_of_birth.split("/")[1] != "undefined") && (typeof date_of_birth.split("/")[2] != "undefined")){
            var day = date_of_birth.split("/")[0];
            var month = date_of_birth.split("/")[1];
            var year = date_of_birth.split("/")[2];
            var age = 18;
            var mydate = new Date();
            mydate.setFullYear(year, month-1, day);
            var currdate = new Date();
            var setDate = new Date();        
            setDate.setFullYear(mydate.getFullYear() + age,month-1, day);
            if ((currdate - setDate) > 0){
                var avobe = '';
            }else{
                $('.validation_error_msg').empty();
                $('.modal .alert-danger').show();
                $('#unique_input_error').modal('show');
                $('.validation_error_msg').append("You must have to be 18 Years Old.");
                $('#date_of_birth').val("").focus();
            }
        }
    }
});

$('#user_type').change(function(){
    $('.user_type_input').css('display', 'none');
    var inputAppeard = $('select[name=user_type]').val();
    $('.'+inputAppeard).css('display', 'block');

});


$('#new_password').focusout(function(e){
    var new_password = $('#new_password').val();
    if(new_password.length < 8){
        $('.validation_error_msg').empty();
        $('.modal .alert-danger').show();
        $('.alert-success').hide();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("New Password Minimum 8 Digit.");
        $('#new_password').val("").focus();
    }else if(!(/^[a-zA-Z0-9]+$/.test(new_password) && /\d/.test(new_password) && /[a-z]/.test(new_password) && /[A-Z]/.test(new_password)))
    {
        $('.validation_error_msg').empty();
        $('.alert-success').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Password should be at least 1 uppercase 1 lowercase 1 number and is only alphanumeric");
        $('#new_password').val("").focus();
    }
});
$('#confirm_password').focusout(function(e){
    
    var _token = $('input[name=_token]').val();
    
    if(confirm_password == new_password){
        if(confirm_password.length < 8){
            $('.validation_error_msg').empty();
            $('.alert-success').hide();
            $('.modal .alert-danger').show();
            $('#unique_input_error').modal('show');
            $('.validation_error_msg').append("Confirm Password Minimum 8 Digit.");
            $('#confirm_password').val("").focus();
        }else if(new_password.length < 8){
            $('.validation_error_msg').empty();
            $('.modal .alert-danger').show();
            $('.alert-success').hide();
            $('#unique_input_error').modal('show');
            $('.validation_error_msg').append("New Password Minimum 8 Digit.");
            $('#new_password').val("").focus();
        }
    }else{
        $('.validation_error_msg').empty();
        $('.modal .alert-danger').show();
        $('.alert-success').hide();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("New Password & Confirm Password Don't Match");
        $('#confirm_password').val("").focus();
    }
});


$('#previous_password').focusout(function(e){
    var previous_password = $('input[name=previous_password]').val();
    var _token = $('input[name=_token]').val();
    $.ajax({
        type: "POST",
        url: "/aml/value/check/password",
        data: {password: previous_password, _token:_token},
        datatype: 'json',
        cache: false,
        async: false,
        success: function (result) {
            if(result.status == 'dontmatch'){
                $('.validation_error_msg').empty();
                $('.modal .alert-danger').show();
                $('.alert-success').hide();
                $('#unique_input_error').modal('show');
                $('.validation_error_msg').append(result.message);
                $("#previous_password").val("").focus();
            }else if(result.status == 'match'){
                $('#unique_input_error').modal('hide');
            }
        },
        error: function (result) {
            $('.validation_error_msg').empty();
            $('.modal .alert-danger').show();
            $('.alert-success').hide();
            $('#unique_input_error').modal('show');
            $('.validation_error_msg').append("Previous Password Id not Correct");
            $("#previous_password").val("").focus();
        }
    });
});



if($("#first_name").val() != '' 
            && $("#last_name").val() != '' 
            && $("#mobile_no").val() != '' 
            && $("#email").val() != '' 
            && $("#date_of_birth").val() != '' 
            && $("#national_id_card_no").val() != '' 
            && $("#latest_degree").val() != '' 
            && $("#last_educational_institution").val() != '' 
            ){
                if(($('input[type=radio][name=job_holder]').val() == 'yes' 
                        && $("#organization_name").val() != ''
                        && $("#job_holder_department").val() != ''
                        && $("#job_holder_department").val() != ''
                        && $("#designation").val() != ''
                        && $("#employee_id_no").val() != '')){

                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
                if(($('input[type=radio][name=student]').val() == 'yes'
                                    && $("#institution_name").val() != ''
                                    && $("#student_department").val() != ''
                                    && $("#student_id_card_no").val() != ''
                                    )){

                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
                if(($('input[type=radio][name=receive_sales_commission_by]').val() == 'Bank'
                                    && $("#bank").val() != ''
                                    && $("#branch").val() != ''
                                    && $("#account_no").val() != ''
                                    )){

                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
                if(($('input[type=radio][name=bKash_account_type]').val() == 'bKash'
                                    && $("#bKash_mobile_no").val() != ''
                                    )){

                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
        }else{
            $(".btnFormSubmit").attr("disabled",false);
        }



$(function () {

    $("input").on("change",function(){
        if($("#first_name").val() != '' 
            && $("#last_name").val() != '' 
            && $("#mobile_no").val() != '' 
            && $("#email").val() != '' 
            && $("#date_of_birth").val() != '' 
            && $("#national_id_card_no").val() != '' 
            && $("#latest_degree").val() != '' 
            && $("#last_educational_institution").val() != '' 
            ){
                if(($('input[type=radio][name=job_holder]').val() == 'yes' 
                        && $("#organization_name").val() != ''
                        && $("#job_holder_department").val() != ''
                        && $("#job_holder_department").val() != ''
                        && $("#designation").val() != ''
                        && $("#employee_id_no").val() != '')){
                    $(".btnFormSubmit").attr("disabled",false);
                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
                if(($('input[type=radio][name=student]').val() == 'yes'
                                    && $("#institution_name").val() != ''
                                    && $("#student_department").val() != ''
                                    && $("#student_id_card_no").val() != ''
                                    )){
                    $(".btnFormSubmit").attr("disabled",false);

                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
                if(($('input[type=radio][name=receive_sales_commission_by]').val() == 'Bank'
                                    && $("#bank").val() != ''
                                    && $("#branch").val() != ''
                                    && $("#account_no").val() != ''
                                    )){
                    $(".btnFormSubmit").attr("disabled",false);

                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
                if(($('input[type=radio][name=bKash_account_type]').val() == 'bKash'
                                    && $("#bKash_mobile_no").val() != ''
                                    )){
                    $(".btnFormSubmit").attr("disabled",false);
                }else{
                    $(".btnFormSubmit").attr("disabled",false);
                }
        }else{
            $(".btnFormSubmit").attr("disabled",false);
        }
    });



});
