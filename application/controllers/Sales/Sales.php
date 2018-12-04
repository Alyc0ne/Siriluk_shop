<?php
class Sales extends CI_Controller{

    public function _construct(){
      parent_construct();
    }

    public function index()
    {
        $data['path_link'] = "Sales/index";
        $this->load->view("Dashboard/mp_default",$data);
    }

    public function getGoods(){
        $GoodsBarcode = $this->input->post('GoodsBarcode');
        $chkNum = is_numeric($GoodsBarcode);
        if ($chkNum) {
            $result = $this->db->select('GoodsNo,GoodsName,GoodsPrice')->where('GoodsBarcode',$GoodsBarcode)->get('smGoods')->row_array();
        }else {
            # code...
        }

        echo json_encode($result);
    }

}





?>
