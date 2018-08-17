<?php //echo public_path();exit;                                                   ?>

@extends('layouts.idlc_aml.app')
@section('page_title','IDLC AML - Forgot password')
@section('body_label','Forgotten Password')
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
<div class="col-sm-8 col-sm-offset-2">
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="col-sm-8 col-sm-offset-2">
                <form method="POST" action="" accept-charset="UTF-8" class="form-signin">

                    <div class="form-group has-feedback">
                        <input type="email" id="old_password" name="old_password" class="form-control" placeholder="Enter your email or phone number" value="" required autofocus/>
                        <span class="glyphicon glyphicon-list form-control-feedback"></span>
                    </div>
                    
                    <div class="row">
                        <div class="col-xs-2 text-center"></div>
                        <div class="col-xs-5 text-center">
                            <button type="submit" class="btn btn-danger btn-block btn-flat">Search</button>
                        </div>
                        <div class="col-xs-5 text-center">
                            <a href="{{route('ifa_registration.edit')}}" type="submit" class="btn btn-danger btn-block btn-flat">Cancel</a>
                        </div>
                    </div>

                    
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
