<!-- <div class="row">
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
            // foreach ($result as $Goods) {
            //     echo "<tr>";
            //         echo "<td>",$Goods['goods_no'],"</td>";
            //         echo "<td>",$Goods['goods_name'],"</td>";
            //         echo "<td>",$Goods['goods_qty'],"</td>";
            //         echo "<td>",$Goods['goods_unit_name'],"</td>";
            //         echo "<td>",$Goods['goods_price'],"</td>";
            //         //echo "<td>",$Goods['goods_cost'],"</td>";
            //     echo "</tr>";
            // }
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
</script> -->
<div class="table-responsive">
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Barcode</th>
        <th scope="col">ชื่อสินค้า</th>
        <th scope="col">จำนวนสินค้า</th>
        <th scope="col">ราคาสินค้า</th>
      </tr>
    </thead>
    <tbody>
      <?php 
        foreach ($result as $Goods) {
          $num = 1;
          echo "<tr>";
              echo "<th scope='row'>",$num,"</th>";
              echo "<td>",$Goods['GoodsBarcode'],"</td>";
              echo "<td>",$Goods['GoodsName'],"</td>";
              echo "<td>",$Goods['GoodsQty'],"</td>";
              echo "<td>",$Goods['GoodsPrice'],"</td>";
          echo "</tr>";
          $num++;
        }

      ?>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</div>