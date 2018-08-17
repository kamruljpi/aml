<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMxpLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mxp_log', function (Blueprint $table) {
            $table->increments('id_mxp_log');
            $table->string('type')->nullable();
            $table->string('app_no')->nullable();
            $table->longText('textdata')->nullable();
            $table->ipAddress('ip_address')->nullable();
            $table->text('login_data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mxp_log');
    }
}
