$(document).ready(function() {

});

$("#discountCash").change(function(e) {
    $subTotal = $("#subTotal").val();
    $discount = $("#discountCash").val();

});

$(document).on("change", "#GoodsBarcode", function(ae) {
    console.log(ae);
    var system = "";
    $.ajax({
        type: 'POST',
        url: "GoodsBarcode/getGoods",
        data: { "System": system },
        datatype: "json",
        traditional: true,
        async: false,
        success: function(e) {
            Running = e;
        },
        error: function(e) {
            //openloading(false);
        }
    });

    //transacSalesGoods.gridControl.addData();
});