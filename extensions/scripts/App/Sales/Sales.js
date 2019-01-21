var update = false;
$(document).ready(function() {
    setTimeout(function(){ $("#GoodsBarcode").focus(); }, 500);
});

$("#discountCash").change(function(e) {
    $subTotal = $("#subTotal").val();
    $discount = $("#discountCash").val();

});

$(document).on("change", "#GoodsBarcodeSearch", function(ae) {
    $.ajax({
        type: 'POST',
        url: base_url + "Goods/GoodsController/getGoods",
        dataType: 'json',
        data: {GoodsBarcode: $("#GoodsBarcodeSearch").val()},
        async: false,
        success: function(e) {
            var index = null;
            if(e != null){
                var GridGoods = transacSalesGoods.gridControl.selectDataGrid();
                if(GridGoods.length > 1){
                    var GoodsID = e.GoodsID;
                    // index = GridGoods.map(x => {
                    //     return GridGoods.uid;
                    // }).indexOf(GoodsID);
                    var index = GridGoods.find((x => x.GoodsID == GoodsID));
                }

                if(index == null){
                    var GoodsPrice = transacSalesGoods.gridControl.addData(e.GoodsID,parseFloat(e.GoodsQty),e.GoodsName,e.GoodsPrice);
                    transacSalesGoods.gridControl.calSummary(true,parseFloat(GoodsPrice));
                    
                }else{
                    transacSalesGoods.gridControl.updateGoodsByIndex(index.uid,parseFloat(e.GoodsQty));
                }   
            }
        },
        error: function(e) {
            //openloading(false);
        }
    });
    //$("#GoodsBarcodeSearch").val("");
});

$(document).on("click",".imageDel", function(e){
    var uid = $(this).closest("#GoodDetail").data("uid");
    bootbox.confirm(
        "ต้องการลบสินค้าชิ้นนี้ ใช่หรือไม่ ?"
    , function(result){ 
        if (result) {
            transacSalesGoods.gridControl.removeGoods(uid);
        }
    });
});

$(document).on("change","#discount", function () {
   var dis = $("#discount").val();
   var sdis = dis.split('%');
   var txtDiscount = 0;
   if (sdis.length > 1) {
        txtDiscount = sdis[0] + "%";
   }else{
        txtDiscount = numberWithCommas(parseFloat(sdis[0]).toFixed(2));
   }
   if(transacSalesGoods.gridControl.countGoodsTransac() > 0){
        $("#discount").val(txtDiscount);
   }else{
        $("#discount").val("");
   }

   transacSalesGoods.gridControl.calSummary("","",txtDiscount);
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function RandomMath() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}