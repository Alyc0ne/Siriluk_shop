<link href="<?php echo base_url(); ?>ex/css/multicheck.css" rel="stylesheet">
<div class="modal fade" id="NoGoodsBarcodeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">NoGoodsBarcode (สินค้าไม่มีบาร์โค้ด)</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>
                            <label class="customcheckbox m-b-20">
                                <input type="checkbox" id="mainCheckbox" />
                                <span class="checkmark"></span>
                            </label>
                        </th>
                        <th scope="col">ชื่อสินค้า</th>
                        <th scope="col">ราคาสินค้า</th>
                    </tr>
                </thead>
                <tbody class="customtable">
                  <?php
                    foreach ($result as $item) {
                      echo "<tr>";
                        echo "<th>";
                        echo "<label class='customcheckbox'>";
                        echo "<input type='checkbox' class='listCheckbox' />";
                        echo "<span class='checkmark'></span>";
                        echo "</label>";
                        echo "</th>";
                        echo "<td>",$item['GoodsName'],"</td>";
                        echo "<td>",$item['GoodsPrice'],"</td>";
                      echo "</tr>";
                    }
                  ?>
                </tbody>
            </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="btn-Select-NoGoodsBarcode">Select</button>
      </div>
    </div>
  </div>
</div>