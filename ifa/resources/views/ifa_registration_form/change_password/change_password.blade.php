@extends('layouts.idlc_aml.app')
@section('page_title','IDLC AML - Change password')
@section('body_label','Change Password')
@section('content')
    <style type="text/css">
        body {
            position: relative;
        }
        .nav-pills{
            border : 1px solid #DDD;
            background: #ce2327;
        }
        .nav > li >a{
            color:#fff;
            text-align: center;
        }
        .nav-pills > li.active > a,
        .nav-pills > li.active > a:focus,
        .nav-pills > li.active > a:hover {
            color: #fff;
            background-color: maroon;
        }
        .nav > li > a:focus,
        .nav > li > a:hover {
            text-decoration: none;
            background-color: maroon;
        }
        .nav .li_1{
            width: 31.3%;
        }
        @media(max-width: 580px){
            .nav .li_1{
                width: 100%;
            }
            .nav li{
                width: 100%;
            }
        }
    </style>
    <div class="col-sm-4 col-sm-offset-4">
        @if(session()->has('changepasswordmsg'))
        <div class="alert alert-danger alert-dismissible" role="alert" style="margin-bottom:30px;" id="">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong id="">{{ session()->pull('changepasswordmsg') }}</strong>
        </div>
        @endif
        @if(session()->has('changepasswordsmsg'))
            <div class="alert alert-success alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                <strong>{{ session()->pull('changepasswordsmsg') }}</strong>
            </div>
        @endif
        <form method="POST" action="{{ route('ifachangepasswordaction') }}" accept-charset="UTF-8" class="form-signin">
            {{ csrf_field() }}
            <div class="form-group has-feedback">
                <input type="password" id="old_password" name="old_password" class="form-control" placeholder="Enter your old password" value="" required autofocus/>
                <span class="glyphicon glyphicon-list form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" id="new_passwords" name="new_password" class="form-control" placeholder="New password" required/>
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" id="confirm_passwords" name="confirm_password" class="form-control" placeholder="Confirm password" required/>
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row">
                <div class="col-xs-12 text-center">
                    <button type="submit" class="btn btn-danger btn-block btn-flat">Change Password</button>
                </div>
            </div>
        </form>
    </div>
@endsection