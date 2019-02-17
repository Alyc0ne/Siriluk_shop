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
        $Where = array('IsDelete' => 0,'IsBarcode' => 0);
        $this->load->library('pagination');
        $config = array();
        $config['per_page'] = 5;
        $config['total_rows'] = $this->db->where($Where)->count_all('smGoods');
        $config['uri_segment'] = 3;
        $config['use_page_numbers'] = true;
        $config['num_links'] = 1;
        $this->pagination->initialize($config);
        $page = $this->uri->segment(3);
        $start = ($page - 1 ) * $config['per_page'];

        $result = $this->BaseSystem->GetGoodsNoBarcode($config['per_page'],$start);

        $arr = array(
            "GoodsData"=>$result,
            "PageData"=>$this->pagination->create_links()
        );

        echo json_encode($arr);

        //https://www.youtube.com/watch?v=nfDMTzmGi9Q
    }

}





?>
