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
            $IsBarcode = $this->input->post("IsBarcode");
            $data=array(
                "GoodsID"=>substr(uniqid(), 3), //10 หลัก
                "GoodsNo"=>$this->input->post("GoodsNo"),
                "GoodsBarcode"=>boolval($IsBarcode) != false ? $this->input->post("GoodsBarcode") : null,
                "GoodsName"=>$this->input->post("GoodsName"),
                "GoodsQty"=>1,
                "GoodsPrice"=>$this->input->post("GoodsPrice"),
                "GoodsCost"=>$this->input->post("GoodsCost"),
                "GoodsUnitID"=>"Null", //$unit['UnitID'],
                "GoodsUnitName"=>"Null", //$unit['UnitName'],
                "GoodsLocationID"=>"Null",
                "GoodsLocationName"=>"Null",
                "CreatedBy"=>null,
                "CreatedDate"=>date("Y-m-d H:i:s"),
                "ModifiedBy"=>null,
                "ModifiedDate"=>date("Y-m-d H:i:s"),
                "IsDelete"=>false,
                "IsBarcode"=>boolval($IsBarcode)
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
        $result = $this->BaseSystem->GetGoodsByBarcode($Barcode);

        echo json_encode($result);
    }

    public function getNoGoodsBarcode()
    {
        $result = $this->BaseSystem->GetGoodsNoBarcode();

        echo json_encode($result);
    }

}





?>
