<?php
class GoodsController extends CI_Controller{

    public function _construct(){
      parent_construct();
    }

    public function index()
    {
        $data['path_link'] = "Goods/index";
        $data['result'] = $this->db->get('smGoods')->result_array();
        $this->load->view("Dashboard/index",$data);
    }

    public function BindSave(){
        try{
            $System = $this->BaseSystem->GenSystem('Unit');
            $unit = $this->BaseSystem->GetDataOneRow($System['$table'],$this->input->post("goods_unit_id"));
            $GoodsQty = $this->input->post("goods_qty");
            $data=array(
                "GoodsID"=>substr(uniqid(), 3), //10 หลัก
                "GoodsNo"=>$this->input->post("goods_no"),
                "GoodsBarcode"=>$this->input->post("goods_barcode"),
                "GoodsName"=>$this->input->post("goods_name"),
                "GoodsQty"=>$GoodsQty*$unit['unit_qty'],
                "GoodsPrice"=>$this->input->post("goods_price"),
                "GoodsCost"=>$this->input->post("goods_cost"),
                "GoodsUnitID"=>"Null", //$unit['UnitID'],
                "GoodsUnitName"=>"Null", //$unit['UnitName'],
                "GoodsLocationID"=>"Null",
                "GoodsLocationName"=>"Null",
                "CreatedBy"=>null,
                "CreatedDate"=>date("Y-m-d H:i:s"),
                "ModifiedBy"=>null,
                "ModifiedDate"=>date("Y-m-d H:i:s"),
                "IsDelete"=>false
            );
            $this->db->insert("smGoods",$data);
        }catch(Exception $e){
            $this->BaseSystem->WriteLogError($e->getMessage());
        }
    }
    
    public function getGoods()
    {
        $Barcode = $this->input->post("GoodsBarcode");
        $where = "";
        if (is_numeric($Barcode)) {
            $where = "Barcode = $Barcode";
        }else {
            $wher = "GoodsName = " + $Barcode;
        }

        $result = $this->BaseSystem->GetGoodsByBarcode($Barcode);

        echo json_encode($result);
    }

}





?>
