<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IFAChangePasswordController extends Controller
{
    public function index(){
    	return view('ifa_registration_form.change_password');
    }
}
