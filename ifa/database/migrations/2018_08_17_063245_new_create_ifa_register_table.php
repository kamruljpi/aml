<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class NewCreateIfaRegisterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_ifa_registrations', function (Blueprint $table) {
            $table->increments('application_no');
            $table->string('ifa_reg_id',120)->nullable();
            $table->string('application_status',120)->nullable();
            $table->string('user_name',120)->nullable();
            $table->string('password')->nullable();
            $table->string('first_name',120)->nullable();
            $table->string('middle_name',120)->nullable();
            $table->string('last_name',120)->nullable();
            $table->string('mobile_no',120)->nullable();
            $table->string('email')->nullable();
            $table->string('father_name',120)->nullable();
            $table->string('mother_name',120)->nullable();
            $table->string('nationality',120)->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('national_id_card_no',160)->nullable();
            $table->string('nid_validation_status',120)->nullable();
            $table->string('is_active',120)->nullable();
            $table->string('is_delete',120)->nullable();
            $table->string('image_ext',120)->nullable();
            $table->string('pre_addr_flat_no',120)->nullable();
            $table->string('pre_addr_house_no',120)->nullable();
            $table->string('pre_addr_road_no',120)->nullable();
            $table->integer('pre_addr_division_id')->nullable();
            $table->integer('pre_addr_district_id')->nullable();
            $table->string('pre_addr_ps_id',120)->nullable();
            $table->string('pre_addr_premise_ownership',120)->nullable();
            $table->string('per_addr_flat_no',120)->nullable();
            $table->string('per_addr_house_no',120)->nullable();
            $table->string('per_addr_road_no',120)->nullable();
            $table->integer('per_addr_division_id')->nullable();
            $table->integer('per_addr_district_id')->nullable();
            $table->string('per_addr_ps_id',120)->nullable();
            $table->integer('per_addr_premise_ownership')->nullable();
            $table->string('latest_degree',120)->nullable();
            $table->string('last_educational_institution',120)->nullable();
            $table->string('is_job_holder',120)->nullable();
            $table->string('organization_name',120)->nullable();
            $table->string('employee_id_no',120)->nullable();
            $table->string('designation',220)->nullable();
            $table->string('job_holder_department',120)->nullable();
            $table->string('is_student',120)->nullable();
            $table->string('institution_name',120)->nullable();
            $table->string('student_id_card_no',120)->nullable();
            $table->string('receive_sales_commission_by',120)->nullable();
            $table->string('bank_id',120)->nullable();
            $table->string('bank_branch_id',120)->nullable();
            $table->string('bank_account_no',120)->nullable();
            $table->string('bKash_acc_type',120)->nullable();
            $table->string('bKash_mobile_no',120)->nullable();
            $table->string('training_status',120)->nullable();
            $table->string('student_department',120)->nullable();
            $table->integer('is_same_as_present_address')->nullable();
            $table->string('others_nationality',120)->nullable();
            $table->string('others_user_type',120)->nullable();
            $table->string('user_type_id',120)->nullable();
            $table->string('button_presses',120)->nullable();
            $table->integer('rejection_remarks_id')->nullable();
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
        Schema::dropIfExists('tbl_ifa_registrations');
    }
}
