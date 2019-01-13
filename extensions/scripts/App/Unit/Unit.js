//Unit
function ShowModalUnit() {
    openloading(true);
    $.ajax({
        type: 'POST',
        url: base_url + "Base/BaseController/GenRunningNumber",
        data: {"System" : "Unit"},
        datatype: "json",
        traditional: true,
        success: function (e) {
            openloading(false);
            $("#UnitNo").val(e);
            $("#ModalNewUnit").modal();
            setTimeout(function(){
                $("#UnitName").focus();
            },700);
        },
        error: function (e) {
            //openloading(false);
        }
    });
}

$("#btn-SaveUnit").click(function (e){
    if (bindValidate("#frmUnit")){
        openloading(true);
        $.ajax({
            type: 'POST',
            url: "<?php echo base_url(); ?>Setting/Unit/BindSave",
            data: {
                "unit_no" : $("#UnitNo").val(),
                "unit_name" : $("#UnitName").val(),
                "unit_qty" : $("#UnitQty").val()
            },
            datatype: "json",
            traditional: true,
            success: function (e) {
                openloading(false);
                PostMsgSuccess(" บันทึกข้อมูลสำเร็จ");
                $("#ModalNewUnit").modal('toggle');
                clearModal("#ModalNewUnit");
            },
            error: function (e) {
                //openloading(false);
            }
        });
    }
});