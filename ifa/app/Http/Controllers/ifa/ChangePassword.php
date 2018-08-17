<?php

namespace App\Http\Controllers\IFA;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChangePassword extends Controller
{
    public function viewPage(Request $request){
    	return view('ifa_registration_form.change_password.change_password');
    }
}
