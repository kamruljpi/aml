<?php

namespace App\Model\MxpLog;

use Illuminate\Database\Eloquent\Model;

class MxpLogModel extends Model
{
    protected $table = "mxp_log";
    protected $primaryKey = "id_mxp_log";    

	protected $fillable = [
	'type','app_no', 'textdata', 'ip_address','login_data'
    ];
}
