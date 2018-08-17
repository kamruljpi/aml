<?php

Route::get('/ifa-registration-form/change/password', 'ifa\ChangePassword@viewPage')->name('ifachangepassword');
Route::post('/ifa-registration-form/changed/password', 'ifa\ChangePassword@changePasswordAction')->name('ifachangepasswordaction');

Route::get('/ifa-registration-form/forget/password', 'ifa\ForgotPassword@viewPage')->name('forget_password_view');

Route::get('/ifa-registration-form', 'IFARegistrationController@index')->name('ifa_registration.index');
Route::get('/ifa-registration-form/create', 'IFARegistrationController@create')->name('ifa_registration.create');
Route::post('/ifa-registration-form', 'IFARegistrationController@store')->name('ifa_registration.store');
Route::get('/ifa-registration-form/getedit', 'IFARegistrationController@edit')->name('ifa_registration.edit');
Route::any('/ifa-registration-form/edit', 'IFARegistrationController@postEdit')->name('ifa_registration.postEdit');


Route::get('/ifa-registration-form/exit', 'ifa\IFALoginController@logout')->name('ifa_registration.exit');

Route::post('/ifa-registration-form/{application_no}', 'IFARegistrationController@update')->name('ifa_registration.update');

Route::put('/ifa-registration-form/{application_no}', 'IFARegistrationController@update')->name('ifa_registration.update');

Route::resource('divisions', 'DivisionController');
Route::resource('districts', 'DistrictController');
Route::resource('thanas', 'ThanaController');
Route::resource('banks', 'BankController');
Route::resource('branchs', 'BranchController');
Route::resource('/nationalitys', 'NationalityController');
Route::resource('/premiseOwnerships', 'PremiseOwnershipController');

Route::any('/get/division', 'ThanaController@showDivision');
Route::any('/get/div/dis/thanas', 'ThanaController@getThanas');
Route::any('/get/bank/branch', 'BranchController@getBranch');

Route::post('/value/check/mobile', 'LiveValidation@mobileNoValidate');
Route::post('/value/check/email', 'LiveValidation@emailValidate');
Route::post('/value/check/national_id_card_no', 'LiveValidation@nidValidate');
Route::post('/value/check/password', 'LiveValidation@passwordValidate');

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return '<h1>Cache facade value cleared</h1>';
});