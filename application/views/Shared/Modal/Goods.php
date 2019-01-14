<!-- Modal -->
<div class="modal fade" id="GoodsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">New Goods (เพิ่มสินค้า)</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
        <form>
            <div class="form-group row">
                <label for="GoodsNo" class="col-sm-2 col-form-label">รหัสสินค้า : </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="GoodsNo" data-maxlength='10' disabled>
                </div>
            </div>
            <div class="form-group row">
                <label for="GoodsBarcode" class="col-sm-2 col-form-label">Barcode : </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="GoodsBarcode" data-maxlength='10'>
                </div>
            </div>
            <div class="form-group row">
                <label for="GoodsBarcode" class="col-sm-2 col-form-label">Barcode : </label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="GoodsBarcode">
                </div>
            </div>
        </form>

        <?php
        // echo "<div id='frmGoods'>";
        //     echo "<div class='frm-default'>";
        //         echo "<div class='frm-group'>";
        //             echo "<label class='frm-label require'>รหัสสินค้า</label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<input type='text' class='input-l' id='GoodsNo' name='GoodsNo' data-maxlength='10' value='' disabled>";
        //             echo "</div>";
        //         echo "</div>";
                
        //         echo "<div class='frm-group'>";
        //             echo "<label class='frm-label require'>Barcode</label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<input type='text' class='input-l' id='GoodsBarcode' name='GoodsBarcode' data-maxlength='10' value=''>";
        //             echo "</div>";
        //         echo "</div>";

        //         echo "<div class='frm-group'>";
        //             echo "<label class='frm-label require'>ชื่อสินค้า</label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<input type='text' class='input-l' id='GoodsName' name='GoodsName' data-maxlength='250' value=''>";
        //             echo "</div>";
        //         echo "</div>";

        //         echo "<div class='frm-group'>";
        //             echo "<label class='frm-label require'>จำนวนสินค้า</label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<input type='text' class='input-l _number' id='GoodsQty' name='GoodsQty' data-maxlength='100' value='1'>";
        //             echo "</div>";
        //         echo "</div>";

        //         echo "<div class='frm-group'>";
        //             echo "<label class='frm-label require'>ราคาสินค้า</label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<input type='text' class='input-l _number' id='GoodsPrice' name='GoodsPrice' data-maxlength='100' value=''>";
        //             echo "</div>";
        //         echo "</div>";

        //         echo "<div class='frm-group'>";
        //             echo "<label class='frm-label'>ต้นทุนสินค้า</label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<input type='text' class='input-l _number' id='GoodsCost' name='GoodsCost' data-maxlength='100' value=''>";
        //             echo "</div>";
        //         echo "</div>";

        //         echo "<div class='frm-group'>";
        //         echo "<label class='frm-label'>หน่วยนับ : </label>";
        //             echo "<div class='frm-content'>";
        //                 echo "<select class='js-example-basic-single' name='state' id='GoodsUnit'>";
        //                 echo "</select>";
        //             echo "</div>";
        //         echo "</div>";

        //         echo "<input type='hidden' id='GoodsUnitID' name='GoodsUnitID'>";            

        //     echo "</div>";
        // echo "</div>";
        ?>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="ModalNewGoods111" role="dialog">
        <div class="modal-dialog">
        
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">New Goods (เพิ่มสินค้า)</h4>
            </div>
            <div class="modal-body">
              <?php
    
                echo "<div id='frmGoods'>";
                    echo "<div class='frm-default'>";
                        echo "<div class='frm-group'>";
                            echo "<label class='frm-label require'>รหัสสินค้า</label>";
                            echo "<div class='frm-content'>";
                                echo "<input type='text' class='input-l' id='GoodsNo' name='GoodsNo' data-maxlength='10' value='' disabled>";
                            echo "</div>";
                        echo "</div>";
                        
                        echo "<div class='frm-group'>";
                            echo "<label class='frm-label require'>Barcode</label>";
                            echo "<div class='frm-content'>";
                                echo "<input type='text' class='input-l' id='GoodsBarcode' name='GoodsBarcode' data-maxlength='10' value=''>";
                            echo "</div>";
                        echo "</div>";
    
                        echo "<div class='frm-group'>";
                            echo "<label class='frm-label require'>ชื่อสินค้า</label>";
                            echo "<div class='frm-content'>";
                                echo "<input type='text' class='input-l' id='GoodsName' name='GoodsName' data-maxlength='250' value=''>";
                            echo "</div>";
                        echo "</div>";
    
                        echo "<div class='frm-group'>";
                            echo "<label class='frm-label require'>จำนวนสินค้า</label>";
                            echo "<div class='frm-content'>";
                                echo "<input type='text' class='input-l _number' id='GoodsQty' name='GoodsQty' data-maxlength='100' value='1'>";
                            echo "</div>";
                        echo "</div>";
    
                        echo "<div class='frm-group'>";
                            echo "<label class='frm-label require'>ราคาสินค้า</label>";
                            echo "<div class='frm-content'>";
                                echo "<input type='text' class='input-l _number' id='GoodsPrice' name='GoodsPrice' data-maxlength='100' value=''>";
                            echo "</div>";
                        echo "</div>";
    
                        echo "<div class='frm-group'>";
                            echo "<label class='frm-label'>ต้นทุนสินค้า</label>";
                            echo "<div class='frm-content'>";
                                echo "<input type='text' class='input-l _number' id='GoodsCost' name='GoodsCost' data-maxlength='100' value=''>";
                            echo "</div>";
                        echo "</div>";
    
                        echo "<div class='frm-group'>";
                        echo "<label class='frm-label'>หน่วยนับ : </label>";
                            echo "<div class='frm-content'>";
                                echo "<select class='js-example-basic-single' name='state' id='GoodsUnit'>";
                                echo "</select>";
                            echo "</div>";
                        echo "</div>";
    
                        echo "<input type='hidden' id='GoodsUnitID' name='GoodsUnitID'>";            
    
                    echo "</div>";
                echo "</div>";
          
              ?>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" id="btn-Save">Save</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>
    </div>