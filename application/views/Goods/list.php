<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
  <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>รหัสสินค้า</th>
                <th>ชื่อสินค้า</th>
                <th>จำนวนคงเหลือ</th>
                <th>หน่วยสินค้า</th>
                <th>ราคาสินค้า</th>
                <th>ต้นทุนสินค้า</th>
            </tr>
        </thead>
        <tbody>
        <?php       
            foreach ($result as $Goods) {
                echo "<tr>";
                    echo "<td>",$Goods['goods_no'],"</td>";
                    echo "<td>",$Goods['goods_name'],"</td>";
                    echo "<td>",$Goods['goods_qty'],"</td>";
                    echo "<td>",$Goods['goods_unit_name'],"</td>";
                    echo "<td>",$Goods['goods_price'],"</td>";
                    //echo "<td>",$Goods['goods_cost'],"</td>";
                echo "</tr>";
            }
        ?>
        </tbody>
    </table>
  </div>
  <div class="col-sm-2"></div>
</div>

<script>
    $(document).ready(function() {
        $('#example').DataTable();
    });
</script>