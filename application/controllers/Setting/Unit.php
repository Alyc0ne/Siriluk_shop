<?php
class Unit extends CI_Controller{

    public function _construct(){
      parent_construct();
    }

    public function BindSave(){
        try{
            $data=array(
                "UnitID"=>substr(uniqid(), 3), //10 หลัก
                "UnitNo"=>$this->input->post("unit_no"),
                "UnitName"=>$this->input->post("unit_name"),
                "UnitQty"=>$this->input->post("unit_qty"),
                "CreatedBy"=>null,
                "CreatedDate"=>date("Y-m-d H:i:s"),
                "ModifiedBy"=>null,
                "ModifiedDate"=>date("Y-m-d H:i:s"),
                "IsDelete"=>false
            );
            $this->db->insert("smUnit",$data);
        }catch(Exception $e){
            $this->BaseSystem->WriteLogError($e->getMessage());
        }
    }

}





?>
