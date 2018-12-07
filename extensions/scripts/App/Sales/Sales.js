$(document).ready(function() {

});

$("#discountCash").change(function(e) {
    $subTotal = $("#subTotal").val();
    $discount = $("#discountCash").val();

});

$(document).on("change", "#GoodsBarcode", function() {
    /*$.ajax({
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
    });*/
    var htmlDetail = "<div>";
    htmlDetail += "<div class='w_20 f_l text_of'>1</div>";
    htmlDetail += "<div class='w_80 f_l text_of'>150990</div>";
    htmlDetail += "<div class='w_80 f_l text_of'>ทดสอบการเพิ่มสินค้า</div>";
    htmlDetail += "<div class='w_80 f_l text_of text_c'>10</div>";
    htmlDetail += "<div class='w_90 f_l text_of text_r'>250</div>";
    htmlDetail += "<div class='w_80 f_l text_of text_r'>2,500</div>"
    htmlDetail += "</div>";
    //htmlDetail += "<div class='clear_b'></div>";
    $("#transac-d-SalesGoods").append(htmlDetail);
});