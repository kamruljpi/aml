<?php

namespace App\Http\Controllers\ifa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ForgotPassword extends Controller
{
    public function viewPage(){
    	return view('ifa_registration_form.forgotten_password.forgot_password_view');
    }
}
