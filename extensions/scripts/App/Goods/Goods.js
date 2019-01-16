$(document).ready(function() {
    $('.js-example-basic-single').select2();

    $("#GoodsUnitName").change(function () {
        
    });
});

$(document).on("click", "#btn-Save-Goods", function () {
    //if (bindValidate("#frmGoods")){
        openloading(true);
        $.ajax({
            type: 'POST',
            url: base_url + "Goods/GoodsController/BindSave",
            data: {
                "goods_no" : $("#GoodsNo").val(),
                "goods_barcode" : $("#GoodsBarcode").val(),
                "goods_name" : $("#GoodsName").val(),
                "goods_qty" : $("#GoodsQty").val(),
                "goods_price" : $("#GoodsPrice").val(),
                "goods_cost" : $("#GoodsCost").val(),
                "goods_unit_id" : $("#GoodsUnit").val()
            },
            datatype: "json",
            traditional: true,
            success: function (e) {
                openloading(false);
                PostMsgSuccess(" บันทึกข้อมูลสำเร็จ");
                $("#ModalNewGoods").modal('toggle');
                clearModal("#ModalNewGoods");
            },
            error: function (e) {
                //openloading(false);
            }
        });
    //}
});