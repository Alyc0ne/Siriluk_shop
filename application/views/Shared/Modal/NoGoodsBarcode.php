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
                        </th>ชื่อสินค้า
                        <th scope="col"></th>
                        <th scope="col">ราคาสินค้า</th>
                    </tr>
                </thead>
                <tbody class="NoGoodsBarcode_Body">

                </tbody>
                <div class='page'>
                  
                </div>
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