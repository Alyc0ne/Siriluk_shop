<?php    
class BaseSystem extends CI_Model
{
    public function GenSystem($System)
    {
        if ($System == "Unit") {
            $FirstChar = "UN";$table = "smUnit";$coloumn = "UnitNo";
        } else if($System == "Goods") {
            $FirstChar = "GO";$table = "smGoods";$coloumn = "GoodsNo";
        }

        $data = array(
            '$FirstChar' => $FirstChar, 
            '$table' => $table,
            '$coloumn' => $coloumn
        );

        return $data;
    }

    public function GetDataOneRow($table,$id){
        $result = $this->db->where('UnitID',$id)->get($table)->row_array();
        return $result;
    }

    public function WriteLogError($txtError){
        $strFileName = "http://localhost:8080/siriluk_shop/extensions/Log/LogError.txt";
        $objCreate = fopen($strFileName, 'a+');
        if($objCreate)
        {
            $str = "\r\n".date("Y-m-d H:i:s")." :: ".$txtError."\r\n";
            fwrite($file,$str);
        }
        else
        {
            echo "File Not Create.";
        }
        fclose($objCreate);
    }

    public function GetGoodsByBarcode($GoodsBarcode)
    {
        $Where = array('GoodsBarcode' => $GoodsBarcode, 'IsDelete' => 0,'IsBarcode' => 1);
        $result = $this->db->where($Where)->get('smGoods')->row_array();
        return $result;
    }

    public function GetGoodsNoBarcode()
    {   
        $Where = array('IsDelete' => 0,'IsBarcode' => 0);
        $row_per_page = 5;
        $total_data = $this->db->where($Where)->count_all('smGoods');
        $total_page = ceil($total_data / $row_per_page);
        
        $result = $this->db->where($Where)->get('smGoods')->result_array();
        return $result;
    }
    
}
      
?>