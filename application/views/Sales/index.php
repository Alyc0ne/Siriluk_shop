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
        echo "<h2>CHECKOUT</h2>";
        
        //Table Checkout
        echo "<table id='example' class='table table-striped' style='width:90%;'>";
        echo "<thead>";
            echo "<tr>";
                echo "<th>Qty</th>";
                echo "<th>Name</th>";
                echo "<th>Price/Piece</th>";
                echo "<th>Total</th>";
                echo "<th>#</th>";
            echo "</tr>";
        echo "</thead>";
        echo "<tbody>";
            echo "<tr>";
                echo "<td id='qtyGoods'></td>";
                echo "<td id='nameGoods'></td>";
                echo "<td id='priceGoods'></td>";
                echo "<td id='totalGoods'></td>";
                echo "<td id='00'></td>";
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='5'></td>";       
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='4'>รวมเงิน : </td>"; 
                echo "<td id='subTotal'></td>";           
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='4'>ส่วนลด : </td>"; 
                echo "<td id='discountCash'></td>";           
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='4'>จำนวนเงินทั้งสิ้น : </td>";
                echo "<td id='totalCash'></td>";            
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='4'>รับเงิน : </td>";
                echo "<td id='receiptCash'></td>";            
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='4'>เงินถอน : </td>";        
                echo "<td id='changeCash'></td>";      
            echo "</tr>";

            echo "<tr>";
                echo "<td colspan='5'><button type='button' class='btn btn-success' style='width:100%'>จ่ายชำระ</button></td>";            
            echo "</tr>";

        echo "</tbody>";
        echo "<tfoot>";
            echo "<tr>";
                echo "<th></th>";
            echo "</tr>";
        echo "</tfoot>";
    echo "</table>";

    echo "</div>";
  echo "</div>";
  //echo "<div class='col-md-1'></div>";
echo "</div>";

?>
