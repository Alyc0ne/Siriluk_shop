var TempDataNoGoodsBarcode = null;
let TempGoodsIDNoGoodsBarcode = new Array();
let numClick = 0;

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

function manageAdd_updateGoods(DataGoods,GridGoods,QtyBarcode) {
    var index = null;
    if(GridGoods.length >= 1){
        index = GridGoods.find((x => x.GoodsID == DataGoods.GoodsID));
    }

    if(index == null){
        var GoodsPrice = transacSalesGoods.gridControl.addData(DataGoods.GoodsID,DataGoods.GoodsName,DataGoods.GoodsPrice,QtyBarcode);
        transacSalesGoods.gridControl.calSummary(true,parseFloat(GoodsPrice));
    }else{
        transacSalesGoods.gridControl.updateGoodsByIndex(index.uid,DataGoods.GoodsPrice,QtyBarcode);
    } 
}

function ShowModalNoGoodsBarcode() {
    $("#NoGoodsBarcodeModal").modal();
    $.ajax({
        type: 'POST',
        url: base_url + "Goods/GoodsController/getNoGoodsBarcode",
        data: {
            IsBarcode : false,
        },
        dataType: "json",
        traditional: true,
        success: function (e) {
            // TempDataNoGoodsBarcode = e.GoodsData;
            // var html = "";
            // for (let i = 0; i < e.GoodsData.length; i++) {
                // html += '<tr id="uid" data-uid="' + RandomMath() + '" data-goodsid="' + e.GoodsData[i].GoodsID + '">';
                // //html += '<tr id ="uid" data-uid="' + uid + '">';
                // html += '<th>';
                // html += '<label class="customcheckbox">';
                // html += '<input type="checkbox" class="chkNoGoodsBarcode" />';
                // html += '<span class="checkmark"></span>';
                // html += '</label>';
                // html += '</th>';
                // html += '<td id="NoGoodsBarcode_QtyBarcode"><input type="number" style="height:5%;" class="text-center w_100" id="QtyBarcode" name="QtyBarcode" min="1" max="99" value="1"></td>';
                // html += '<td id="NoGoodsBarcode_GoodsName">' + e.GoodsData[i].GoodsName + '</td>';
                // html += '<td id="NoGoodsBarcode_GoodsPrice" class="text-right">' + numberWithCommas(parseFloat(e.GoodsData[i].GoodsPrice).toFixed(2)) + '</td>';
                // html += '</tr>';
            //}
            // $(".NoGoodsBarcode_Body").append(html);
            $(".table-responsive").append(e.GoodsData);
            $(".page").append(e.PageData);

            // var pagination = '<nav aria-label="...">';
            // pagination += '<ul class="pagination  justify-content-center">';
            // pagination += '<li class="page-item disabled">';
            // pagination += '<a class="page-link" href="#" tabindex="-1">Previous</a>';
            // pagination += '</li>';

            // for (let c = 0; c < e.PageData; c++) {
            //     // var numPage = c+1;
            //     // pagination += '<li class="page-item"><a class="page-link" href="#">' + numPage + '</a></li>';
            // }
            
                
            
            // pagination += '<li class="page-item active">';
            // pagination += '<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>';
            // pagination += '</li>';
            // pagination += '<li class="page-item"><a class="page-link" href="#">3</a></li>';
            // pagination += '<li class="page-item">';
            // pagination += '<a class="page-link" href="#">Next</a>';
            // pagination += '</li>';
            // pagination += '</ul>';
            // pagination += ' </nav>';
            //var pagination = '<?php echo $this->pagination->create->link(); ?>'; 
            //$('.page').append('<?php echo $this->pagination->create->link(); ?>');
        },
        error: function (e) {
            //openloading(false);
        }
    });
}

$(document).on("click", ".chkNoGoodsBarcode", function (e) {
    var uid = $(this).closest('tr').data("goodsid"); //GoodsID for rowGoods
    if($(".chkNoGoodsBarcode:checkbox:checked").length > numClick){
        TempGoodsIDNoGoodsBarcode.push(uid);
        numClick++;
    }else{
        var index = TempGoodsIDNoGoodsBarcode.map(x => {
            return x.uid;
        }).indexOf(uid);
        TempGoodsIDNoGoodsBarcode.splice(index,1);
        numClick--;
    }
});

$(document).on("click", "#btn-Select-NoGoodsBarcode", function (e) {
    var arrResult = new Array();
    if (TempGoodsIDNoGoodsBarcode != null && TempGoodsIDNoGoodsBarcode.length > 0) {
        for (let c = 0; c < TempGoodsIDNoGoodsBarcode.length; c++) {
            // var result = $.grep(TempGoodsIDNoGoodsBarcode, function (e) {
            //     return e.GoodsID == TempGoodsIDNoGoodsBarcode[c].GoodsID;
            // });
            var result = TempDataNoGoodsBarcode.find(x => x.GoodsID == TempGoodsIDNoGoodsBarcode[c]);
            arrResult.push(result);
        }
        
        if (arrResult != null && arrResult.length > 0) {
            for (let a = 0; a < arrResult.length; a++) {
                transacSalesGoods.gridControl.addData(arrResult[a].GoodsID,arrResult[a].GoodsName,arrResult[a].GoodsPrice,1);
            }
        }
    }
});