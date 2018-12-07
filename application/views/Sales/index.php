<script type="text/javascript" src="<?php echo base_url(); ?>extensions/scripts/App/Sales/Sales.js"></script>
<style type="text/css">
body {
    overflow:hidden;
}
</style>

<?php
echo "<div class='row'>";
  echo "<div class='col-md-1'></div>";
  //Left
  echo "<div class='col-md-6'>";
    echo "<input list='Goods' id='GoodsBarcode' style='width:80%;height:30px;margin:auto;'>";
    echo "<datalist id='Goods'>";
    echo "</datalist>";
  echo "</div>";

  //Right
  echo "<div class='col-md-5'>";
    echo "<div class='header-box-right'>";
        include('UC/sales_rightbox.html');  
    echo "</div>";
  echo "</div>";
  //echo "<div class='col-md-1'></div>";
echo "</div>";

?>
