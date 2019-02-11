$(document).ready(function() {
    $('.js-example-basic-single').select2();

    $("#GoodsUnitName").change(function () {
        
    });
});

$(document).on("click", "#btn-Save-Goods", function () {
    if (bindValidate("#frmGoods")){
        //openloading(true);
        $.ajax({
            type: 'POST',
            url: base_url + "Goods/GoodsController/BindSave",
            data: {
                "GoodsNo" : $("#GoodsNo").val(),
                "IsBarcode" : $("#IsBarcode:checkbox:checked").length,
                "GoodsBarcode" : $("#GoodsBarcode").val(),
                "GoodsName" : $("#GoodsName").val(),
                "GoodsPrice" : $("#GoodsPrice").val(),
                "GoodsCost" : $("#GoodsCost").val(),
                "goods_unit_id" : $("#GoodsUnit").val()
            },
            datatype: "json",
            traditional: true,
            success: function (e) {
                //openloading(false);
                //PostMsgSuccess(" บันทึกข้อมูลสำเร็จ");
                $("#GoodsModal").modal('toggle');
                clearModal("#frmGoods");
            },
            error: function (e) {
                //openloading(false);
            }
        });
    }
});

//Goods
function ShowModalGoods() {
    //openloading(true);
    if(checkDataTable('Unit')){
        $("#GoodsNo").val(GenRunningNumber("Goods"));
        GetDataJson('Unit','#GoodsUnit');
        $("#GoodsModal").modal();
        // setTimeout(function(){
        //     $("#GoodsBarcode").focus();
        //     openloading(false);
        // },700);
    }
}

$(document).on("click", "#IsBarcode", function () {
    var IsBarcode = $("#IsBarcode:checkbox:checked").length;
    if (IsBarcode > 0) {
        $("#GoodsBarcode").prop("disabled",false);
    }else{
        $("#GoodsBarcode").prop("disabled",true);
    }
});

function ShowModalNoGoodsBarcode() {
    $.ajax({
        type: 'POST',
        url: base_url + "Goods/GoodsController/getNoGoodsBarcode",
        data: {
            IsBarcode : false,
        },
        dataType: "json",
        traditional: true,
        success: function (e) {
            var uid = RandomMath();
            var html = "";
            for (let i = 0; i < e.length; i++) {
                html += '<tr id="uid" data-uid="' + RandomMath() + '">';
                //html += '<tr id ="uid" data-uid="' + uid + '">';
                html += '<th>';
                html += '<label class="customcheckbox">';
                html += '<input type="checkbox" class="listCheckbox" />';
                html += '<span class="checkmark"></span>';
                html += '</label>';
                html += '</th>';
                html += '<td>"' + e[i].GoodsName + '"</td>';
                html += '<td>"' + e[i].GoodsPrice + '"</td>';
                html += '</tr>';
            }
            $(".NoGoodsBarcode_Body").append(html);

            var pagination = '<nav aria-label="...">';
            pagination += '<ul class="pagination">';
                
            pagination += '<li class="page-item disabled">';
            pagination += '<a class="page-link" href="#" tabindex="-1">Previous</a>';
            pagination += '</li>';
            pagination += '<li class="page-item"><a class="page-link" href="#">1</a></li>';
            pagination += '<li class="page-item active">';
            pagination += '<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>';
            pagination += '</li>';
            pagination += '<li class="page-item"><a class="page-link" href="#">3</a></li>';
            pagination += '<li class="page-item">';
            pagination += '<a class="page-link" href="#">Next</a>';
            pagination += '</li>';
            pagination += '</ul>';
            pagination += ' </nav>';
            $('.page').append(pagination);
        },
        error: function (e) {
            //openloading(false);
        }
    });
}