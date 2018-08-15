<?php

namespace App\Http\Controllers;

use App\IFARegistration;
use Illuminate\Http\Request;
use Hash;

class LiveValidation extends Controller {
	public function mobileNoValidate(Request $req) {
		if (empty($req->mobile_number)) {
			return [
				'type' => 'mobile_number',
				'status' => 'exists',
				'message' => 'Empty Value is not Allowed.',
			];
		}
		if (strlen($req->mobile_number) != 10) {
			return [
				'type' => 'mobile_number',
				'status' => 'exists',
				'message' => 'Only Ten Digit are allowed.',
			];
		}
		if (!is_numeric($req->mobile_number)) {
			return [
				'type' => 'mobile_number',
				'status' => 'exists',
				'message' => 'Only Number Is allowed.',
			];
		}
		$mobileNoCheck = IFARegistration::get()->where('mobile_no', $req->mobile_number)->count();
		if ($mobileNoCheck > 0) {
			return [
				'type' => 'mobile_number',
				'status' => 'exists',
				'message' => 'Mobile number is already exists.',
			];
		}
		return [
			'type' => 'mobile_number',
			'status' => 'unique',
		];
	}

	public function passwordValidate(Request $req) {
		$mobile_no = session()->get('ifa_registration_mobile_no');

		if(!empty($mobile_no)){
			$db_password = IFARegistration::select('password')->where('mobile_no', $mobile_no)->first();
			$is_match_password = Hash::check($req->input('password'), $db_password->password);

			if(!$is_match_password){
				return [
					'type' => 'password',
					'status' => 'dontmatch',
					'message' => 'Previous Password Is Wrong.',
				];
			}else{
				return [
					'type' => 'password',
					'status' => 'match',
				];
			}
		}else{
			return [
				'type' => 'password',
				'status' => 'dontmatch',
				'message' => 'Previous Password Is Wrong.',
			];
		}
	}

	public function emailValidate(Request $req) {
		$emailCheck = IFARegistration::get()->where('email', $req->email)->count();
		if ($emailCheck > 0) {
			return [
				'type' => 'email',
				'status' => 'exists',
				'message' => 'Email address is already exists.',
			];
		}
		return [
			'type' => 'email',
			'status' => 'unique',
		];
	}

	public function nidValidate(Request $req) {
		$emailCheck = IFARegistration::get()->where('national_id_card_no', $req->national_id_card_no)->count();
		if ($emailCheck > 0) {
			return [
				'type' => 'nid',
				'status' => 'exists',
				'message' => 'National ID Card No is already exists.',
			];
		}
		return [
			'type' => 'email',
			'status' => 'unique',
		];
	}
}
