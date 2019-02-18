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
    GetNoGoodsBarcode();
    $("#NoGoodsBarcodeModal").modal();
}

function GetNoGoodsBarcode(page) {
    $.ajax({
        type: 'POST',
        url: base_url + "Goods/GoodsController/getNoGoodsBarcode",
        data: {
            page : page,
        },
        dataType: "json",
        traditional: true,
        success: function (e) {
            TempDataNoGoodsBarcode = e.GoodsData;
            $(".table-responsive").html("");
            $(".page").html("");
            $(".table-responsive").append(e.TableData);

            var pagination = '<nav aria-label="...">';
            pagination += '<ul class="pagination  justify-content-center">';
            pagination += '<li class="page-item disabled">';
            pagination += '<a class="page-link" href="#" tabindex="-1">Previous</a>';
            pagination += '</li>';

            for (let c = 0; c < e.PageData; c++) {
                var numPage = c+1;
                pagination += '<li class="page-item"><a class="page-link" id=' + numPage + ' href="#">' + numPage + '</a></li>';
            }
            
                
            
            // pagination += '<li class="page-item active">';
            // pagination += '<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>';
            // pagination += '</li>';
            // pagination += '<li class="page-item"><a class="page-link" href="#">3</a></li>';
            if (e.PageData > page) {
                pagination += '<li class="page-item">';
                pagination += '<a class="page-link" href="#" id=' + page + 1 + '>Next</a>';
                pagination += '</li>';
            }
            
            pagination += ' </nav>';
            //var pagination = '<?php echo $this->pagination->create->link(); ?>'; 
            $('.page').append(pagination);
        },
        error: function (e) {
            //openloading(false);
        }
    });
}

$(document).on('click', '.page-link', function(){  
    var page = $(this).attr("id");  
    GetNoGoodsBarcode(page);  
});  

$(document).on("click", ".chkNoGoodsBarcode", function (e) {
    var GoodsID = $(this).closest('tr').data("goodsid"); //GoodsID for rowGoods
    if($(".chkNoGoodsBarcode:checkbox:checked").length > numClick){
        TempGoodsIDNoGoodsBarcode.push(GoodsID);
        numClick++;
    }else{
        var index = TempGoodsIDNoGoodsBarcode.map(x => {
            return x.GoodsID;
        }).indexOf(GoodsID);
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
        
        var GridGoods = transacSalesGoods.gridControl.selectDataGrid();
        if (arrResult != null && arrResult.length > 0) {
            for (let a = 0; a < arrResult.length; a++) {
                var QtyBarcode = $(".NoGoodsBarcode_Body").find('tr[data-goodsid=' + arrResult[a].GoodsID + '] td#NoGoodsBarcode_QtyBarcode input#QtyBarcode').val();
                // transacSalesGoods.gridControl.addData(arrResult[a].GoodsID,arrResult[a].GoodsName,arrResult[a].GoodsPrice,1);
                manageAdd_updateGoods(arrResult[a],GridGoods,QtyBarcode);
            }
        }
    }
    $('#NoGoodsBarcodeModal').modal('toggle');
});