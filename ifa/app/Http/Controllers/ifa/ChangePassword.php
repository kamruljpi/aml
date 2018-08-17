<?php

namespace App\Http\Controllers\IFA;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\IFARegistration;
use Validator;
use Hash;
use Session;
use DB;

class ChangePassword extends Controller
{
    public function viewPage(Request $request){
    	if (empty($request->session()->get('mobile_no')) && empty($request->session()->get('ifausraccess'))) {
			return redirect()->route('ifa_registration.edit');
		}

    	return view('ifa_registration_form.change_password.change_password');
    }
    public function changePasswordAction(Request $request){

    	if (empty($request->session()->get('mobile_no')) && empty($request->session()->get('ifausraccess'))) {
			return redirect()->route('ifa_registration.edit');
		}

    	if ($request->has('old_password') && !is_null($request->input('old_password')) && !is_null($request->input('new_password') && is_null($request->input('confirm_password')))) {

    		if($request->input('new_password') == $request->input('confirm_password')){
    				$new_password = $request->input('new_password');
		    		$mobile_no = session()->get('mobile_no');

					$db_password = IFARegistration::select('password')->where('mobile_no', $mobile_no)->first();

					$is_match_prev_password = Hash::check($request->input('old_password'), $db_password->password);

					$xnew_password  = Hash::make($request->input('new_password'));

					if ($is_match_prev_password === FALSE) {
						Session::flash('changepasswordmsg', "Current Password Is Wrong");
						return redirect()->route('ifachangepassword');
					}else{
						DB::table('tbl_ifa_registrations')->where('mobile_no', $mobile_no)->update(['password' => $xnew_password]);

						$request->session()->put('ifausraccess', $new_password);

						Session::flash('changepasswordsmsg', "Successfully Changed Password. Please Use This New Password In Your Next Login.");
						return redirect()->route('ifachangepassword');
					}
    		}else{
    			Session::flash('changepasswordmsg', "New Password & Confirm don't Match.");
    			return redirect()->route('ifachangepassword');
    		}    		
		}else{
			Session::flash('changepasswordmsg', "All Field Is Required.");
			return redirect()->route('ifachangepassword');
		}
    }
}
