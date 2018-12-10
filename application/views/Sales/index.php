<script type="text/javascript" src="<?php echo base_url(); ?>extensions/scripts/App/Sales/Sales.js"></script>
<style type="text/css">
body {
    overflow:hidden;
}
</style>

<?php
echo "<div class='row' style='paading-right:5px;'>";
  //Left
  echo "<div class='col-md-8' class='text_c' style='background-color:#f2f2f2;text-align:center;'>";
    echo "<input list='Goods'  id='GoodsBarcode' style='width:75%;height:30px'>";
    echo "<datalist id='Goods'>";
    echo "</datalist>";
  echo "</div>";

  //Right
  echo "<div class='col-md-4' style='background-color:#f2f2f2;'>";
    echo "<div class='header-box-right'>";
        include('UC/sales_rightbox.html');  
    echo "</div>";
  echo "</div>";
echo "</div>";

?>
