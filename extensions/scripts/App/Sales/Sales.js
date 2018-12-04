$(document).ready(function() {
    $("#discountCash").change(function(e) {
        $subTotal = $("#subTotal").val();
        $discount = $("#discountCash").val();

    });

    $("#GoodsBarcode").change(function(e) {
        $.ajax({
            type: 'POST',
            url: "../Sales/Sales/getGoods",
            data: {
                "GoodsBarcode": $("#GoodsBarcode").val(),
            },
            datatype: "json",
            traditional: true,
            success: function(e) {

            },
            error: function(e) {
                //openloading(false);
            }
        });
    });
});