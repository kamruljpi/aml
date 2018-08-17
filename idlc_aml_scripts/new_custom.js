


function isIdlcEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('#mobile_no').focusout(function(e){
    var mobile_number = $('input[name=mobile_no]').val();
    var mobile_number_pref_valid = ['17','16','15','18','19'];
    var _token = $('input[name=_token]').val();
    if(!$.isNumeric(mobile_number) && mobile_number.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only Number is allowed.");
        $("#mobile_no").val("").focus();
    }else if(mobile_number.length != 10  && mobile_number.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only allowed Ten Digit.");
        $("#mobile_no").focus();
    }else if(mobile_number.length == 10 ){
        var mobile_number_pref = mobile_number.substr(0, 2);
        if($.inArray(mobile_number_pref, mobile_number_pref_valid) == -1){
            $('.validation_error_msg').empty();
            $('.alert-danger').hide();
            $('.modal .alert-danger').show();
            $('#unique_input_error').modal('show');
            $('.validation_error_msg').append("Mobile Number Must be start with (17..,18..,19...,16...,15...)");
            $("#mobile_no").val("").focus();
        }else{
            $.ajax({
                type: "POST",
                url: baseURL + "/value/check/mobile",
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
            url: baseURL + "/value/check/email",
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
    }
});


// $('#national_id_card_no').focusout(function(e){
//     var national_id_card_no = $('#national_id_card_no').val();
//     var _token = $('input[name=_token]').val();
//     var valid_nid_len = [10,13,17];
//     var nid_len = national_id_card_no.length;
//     if(national_id_card_no == '' && national_id_card_no.length > 0) {
//            $('.validation_error_msg').empty();
//            $('.alert-danger').hide();
//            $('.modal .alert-danger').show();
//            $('#unique_input_error').modal('show');
//            $('.validation_error_msg').append("You can not leave with empty Value.");
//            $('#national_id_card_no').val("").focus();
//     }else if($.inArray(nid_len, valid_nid_len) == -1 && national_id_card_no.length > 0)
//     {
//         $('.validation_error_msg').empty();
//         $('.alert-danger').hide();
//         $('.modal .alert-danger').show();
//         $('#unique_input_error').modal('show');
//         $('.validation_error_msg').append("Only allowed 10,13,17 digit.");
//         $("#national_id_card_no").val("").focus();
//     }else if(!$.isNumeric(national_id_card_no) && national_id_card_no.length > 0)
//     {
//         $('.validation_error_msg').empty();
//         $('.alert-danger').hide();
//         $('.modal .alert-danger').show();
//         $('#unique_input_error').modal('show');
//         $('.validation_error_msg').append("Only Number is allowed.");
//         $("#national_id_card_no").val("").focus();
//     }else{
//         // for modal
//         $('#unique_input_error').modal('hide');

//         $.ajax({
//             type: "POST",
//             url: baseURL + "/value/check/national_id_card_no",
//             data: {national_id_card_no: national_id_card_no, _token:_token},
//             datatype: 'json',
//             cache: false,
//             async: false,
//             success: function (result) {
//                 if(result.status == 'exists' && $('.nid_box .alert-danger').length == 0){              
//                     // For Modal
//                     $('.validation_error_msg').empty();
//                     $('.alert-danger').hide();
//                     $('.modal .alert-danger').show();
//                     $('#unique_input_error').modal('show');
//                     $('.validation_error_msg').append(result.message);
//                     $('#national_id_card_no').val("").focus();            
//                 }else if(result.status == 'unique'){
//                     $('.nid_box .alert-danger').remove();
//                 }
//             },
//             error: function (result) {
//                 $('.validation_error_msg').empty();
//                 $('.alert-danger').hide();
//                 $('.modal .alert-danger').show();
//                 $('#unique_input_error').modal('show');
//                 $('.validation_error_msg').append("NID Is Not Valid");
//                 $('#national_id_card_no').val("").focus();  
//             }
//         });
//     }
// });


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
        url: baseURL + "/value/check/password",
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

$('#bKash_mobile_no').focusout(function(e){
    var mobile_number = $('input[name=bKash_mobile_no]').val();
    var mobile_number_pref_valid = ['17','16','15','18','19'];
    var _token = $('input[name=_token]').val();
    if(!$.isNumeric(mobile_number) && mobile_number.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only Number is allowed.");
        $("#bKash_mobile_no").val("").focus();
    }else if(mobile_number.length != 10  && mobile_number.length > 0){
        $('.validation_error_msg').empty();
        $('.alert-danger').hide();
        $('.modal .alert-danger').show();
        $('#unique_input_error').modal('show');
        $('.validation_error_msg').append("Only allowed Ten Digit.");
        $("#bKash_mobile_no").focus();
    }else if(mobile_number.length == 10 ){
        var mobile_number_pref = mobile_number.substr(0, 2);
        if($.inArray(mobile_number_pref, mobile_number_pref_valid) == -1){
            $('.validation_error_msg').empty();
            $('.alert-danger').hide();
            $('.modal .alert-danger').show();
            $('#unique_input_error').modal('show');
            $('.validation_error_msg').append("Mobile Number Must be start with (17..,18..,19...,16...,15...)");
            $("#bKash_mobile_no").val("").focus();
        }else{
            $('#unique_input_error').modal('hide');
        }
    }else if(mobile_number == ''  && mobile_number.length > 0) {
        $('#unique_input_error').modal('hide');
    }else{
        $('#unique_input_error').modal('hide');
    }
});
function disabledAllField(){
    $("#first_name").attr("disabled",true);
    $("#middle_name").attr("disabled",true);
    $("#last_name").attr("disabled",true);
    $("#mobile_no").attr("disabled",true);
    $("#email").attr("disabled",true);
    $("#father_name").attr("disabled",true);
    $("#mother_name").attr("disabled",true);
    $("#nationality").attr("disabled",true);
    $("#date_of_birth").attr("disabled",true);
    $("#national_id_card_no").attr("disabled",true);
    $("#user_type").attr("disabled",true);
    $("#present_address_premise_ownership").attr("disabled",true);
    $("#present_address_division").attr("disabled",true);
    $("#present_address_district").attr("disabled",true);
    $("#present_address_po").attr("disabled",true);
    $("#present_address_road_no").attr("disabled",true);
    $("#present_address_house_no").attr("disabled",true);
    $("#present_address_flat_no").attr("disabled",true);
    $("#latest_degree").attr("disabled",true);
    $("#last_educational_institution").attr("disabled",true);
    $('input[name=job_holder]').attr("disabled",true);
    $("#organization_name").attr("disabled",true);
    $("#job_holder_department").attr("disabled",true);
    $("#designation").attr("disabled",true);
    $("#employee_id_no").attr("disabled",true);
    $('input[name=student]').attr("disabled",true);
    $("#institution_name").attr("disabled",true);
    $("#student_department").attr("disabled",true);
    $("#student_id_card_no").attr("disabled",true);
    $('input[name=receive_sales_commission_by]').attr("disabled",true);
    $("#bank").attr("disabled",true);
    $("#branch").attr("disabled",true);
    $("#account_no").attr("disabled",true);
    $('input[name=bKash_account_type]').attr("disabled",true);
    $("#bKash_mobile_no").attr("disabled",true);
    $('input[name=is_same_as_present_address]').attr("disabled",true);
    $("#permanent_address_premise_ownership").attr("disabled",true);
    $("#permanent_address_division").attr("disabled",true);
    $("#permanent_address_district").attr("disabled",true);
    $("#permanent_address_po").attr("disabled",true);
    $("#permanent_address_road_no").attr("disabled",true);
    $("#permanent_address_house_no").attr("disabled",true);
    $("#permanent_address_flat_no").attr("disabled",true);
    $("#others_nationality").attr("disabled",true);
    $("#others_user_type").attr("disabled",true);

    $("#first_name").prop("readonly",true);
    $("#middle_name").prop("readonly",true);
    $("#last_name").prop("readonly",true);
    $("#mobile_no").prop("readonly",true);
    $("#email").prop("readonly",true);
    $("#father_name").prop("readonly",true);
    $("#mother_name").prop("readonly",true);
    $("#nationality").prop("readonly",true);
    $("#date_of_birth").prop("readonly",true);
    $("#national_id_card_no").prop("readonly",true);
    $("#user_type").prop("readonly",true);
    $("#present_address_premise_ownership").prop("readonly",true);
    $("#present_address_division").prop("readonly",true);
    $("#present_address_district").prop("readonly",true);
    $("#present_address_po").prop("readonly",true);
    $("#present_address_road_no").prop("readonly",true);
    $("#present_address_house_no").prop("readonly",true);
    $("#present_address_flat_no").prop("readonly",true);
    $("#latest_degree").prop("readonly",true);
    $("#last_educational_institution").prop("readonly",true);
    $('input[name=job_holder]').prop("readonly",true);
    $("#organization_name").prop("readonly",true);
    $("#job_holder_department").prop("readonly",true);
    $("#others_nationality").prop("readonly",true);
    $("#others_user_type").prop("readonly",true);
    $("#designation").prop("readonly",true);
    $("#employee_id_no").prop("readonly",true);
    $('input[name=student]').prop("readonly",true);
    $("#institution_name").prop("readonly",true);
    $("#student_department").prop("readonly",true);
    $("#student_id_card_no").prop("readonly",true);
    $('input[name=receive_sales_commission_by]').prop("readonly",true);
    $("#bank").prop("readonly",true);
    $("#branch").prop("readonly",true);
    $("#account_no").prop("readonly",true);
    $('input[name=bKash_account_type]').prop("readonly",true);
    $("#bKash_mobile_no").prop("readonly",true);
    $('input[name=is_same_as_present_address]').prop("readonly",true);
    $("#permanent_address_premise_ownership").prop("readonly",true);
    $("#permanent_address_division").prop("readonly",true);
    $("#permanent_address_district").prop("readonly",true);
    $("#permanent_address_po").prop("readonly",true);
    $("#permanent_address_road_no").prop("readonly",true);
    $("#permanent_address_house_no").prop("readonly",true);
    $("#permanent_address_flat_no").prop("readonly",true);
}

function checkSubmitBtnStatus(){
    if(
        $("#first_name").val() != '' &&
        // $("#middle_name").val() != '' &&
        $("#last_name").val() != '' &&
        $("#mobile_no").val() != '' &&
        $("#email").val() != '' &&
        $("#father_name").val() != '' &&
        $("#mother_name").val() != '' &&
        $("#nationality").val() != '' &&
        $("#date_of_birth").val() != '' &&
        $("#national_id_card_no").val() != '' &&
        $("#user_type").val() != '' &&
        $("#present_address_premise_ownership").val() != '' &&
        $("#present_address_division").val() != '' &&
        $("#present_address_district").val() != '' &&
        $("#present_address_po").val() != '' &&
        $("#present_address_road_no").val() != '' &&
        $("#present_address_house_no").val() != '' &&
        $("#present_address_flat_no").val() != '' &&

        $("#latest_degree").val() != '' &&
        $("#last_educational_institution").val() != '' &&
        $('input[name=is_same_as_present_address]:checked').val() != ''
        ){
            if(
                (($('input[name=job_holder]:checked').val() == 'yes') &&
                            ($("#organization_name").val() != '' &&
                            $("#job_holder_department").val() != '' &&
                            $("#designation").val() != '' &&
                            $("#employee_id_no").val() != '')) || 
                ($('input[name=job_holder]:checked').val() == 'no')
             ){
                if(
                    (($('input[name=student]:checked').val() == 'yes') &&
                                ($("#institution_name").val() != '' &&
                                $("#student_department").val() != '' &&
                                $("#student_id_card_no").val() != '')) || 
                    ($('input[name=student]:checked').val() == 'no')

                 ){
                    if(
                        (($('input[name=receive_sales_commission_by]:checked').val() == 'Bank') &&
                                    ($("#bank").val() != '' &&
                                    $("#branch").val() != '' &&
                                    $("#account_no").val() != '')) || 
                        ($('input[name=receive_sales_commission_by]:checked').val() == 'bKash' &&
                            $('input[name=bKash_account_type]:checked').val() != '' &&
                            $("#bKash_mobile_no").val() != ''
                            )
                     ){
                        if(($('input[name=is_same_as_present_address]:checked').val() == 'no' && 
                            $("#permanent_address_premise_ownership").val() != '' &&
                            $("#permanent_address_division").val() != '' &&
                            $("#permanent_address_district").val() != '' &&
                            $("#permanent_address_po").val() != '' &&
                            $("#permanent_address_road_no").val() != '' &&
                            $("#permanent_address_house_no").val() != '' &&
                            $("#permanent_address_flat_no").val() != '') || ($('input[name=is_same_as_present_address]:checked').val() == 'yes')
                            ){
                                // if(document.getElementById("upload_picture").files.length != 0){
                                //    $('.btn_submit').removeAttr("disabled");
                                // }else{
                                    // $(".btn_submit").attr("disabled", true);
                                // }
                            $('.btn_submit').removeAttr("disabled");
                        }else{
                            $(".btn_submit").attr("disabled", true);
                        }
                    }else{
                        $(".btn_submit").attr("disabled", true);
                    }
                }else{
                    $(".btn_submit").attr("disabled", true);
                }
            }else{
                $(".btn_submit").attr("disabled", true);
            }
    }else{
        $(".btn_submit").attr("disabled", true);
    }
}

$(document).ready(function(){
    checkSubmitBtnStatus();
    $("#first_name,#middle_name,#last_name,#mobile_no,#email,#father_name,#mother_name,#nationality,#date_of_birth,#national_id_card_no,#user_type,#present_address_premise_ownership,#present_address_division,#present_address_district,#present_address_po,#present_address_road_no,#present_address_house_no,#present_address_flat_no,#permanent_address_premise_ownership,#permanent_address_division,#permanent_address_district,#permanent_address_po,#permanent_address_road_no,#permanent_address_house_no,#permanent_address_flat_no,#latest_degree,#last_educational_institution,#organization_name,#job_holder_department,#designation,#employee_id_no,#institution_name,#student_department,#student_id_card_no,#bank,#branch,#account_no,#bKash_mobile_no").on("change",function(){
        checkSubmitBtnStatus();
    });
    $("input[name=is_same_as_present_address],input[name=bKash_account_type],input[name=job_holder],input[name=student],input[name=receive_sales_commission_by]").on("click",function(){
        checkSubmitBtnStatus();
    });
});

