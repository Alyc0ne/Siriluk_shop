$(document).ready(function () {
    var transacSalesGoods = new setTransac();
    transacSalesGoods.init();
});

function setTransac() {
    var _t = this;
    _t.Name = "transacSales";
    _t.Element = null;
    _t.init = function(){
        _t.htmlControl.getElement();
        _t.htmlControl.genGrid();
    };

    _t.htmlControl = {
        getElement: function () {
            _t.Element = $("#" + _t.Name);
            return _t.Element;
        },
        genGrid: function () {
            var grid = $('<div id="transacSales"></div>"');
            //Header
            var Header = $('<div id="transacSales-H"></div>');
            Header.append("<div style='background-color:aquamarine;width: 500px;display: table;height: 30px;'>");
            Header.append("<div class='w_p10 f_l p_all'>#</div>");
            Header.append("<div class='w_p15 f_l p_all'>รหัสสินค้า</div>");    
            Header.append("<div class='w_p30 f_l p_all'>ชื่อสินค้า</div>");     
            Header.append("<div class='w_p15 f_l text_c p_all'>จำนวน</div>");     
            Header.append("<div class='w_p15 f_l text_r p_all'>ราคา/หน่วย</div>");     
            Header.append("<div class='w_p15 f_l text_r p_all'>จำนวนเงิน</div>");
            Header.append("</div>");

            //Detail
            var Detail = $('<div id="transacSales-D"></div>');
            Detail.append("<div class='w_p100 text_c'>ไม่มีข้อมูล</div>");

            grid.append(Header);
            grid.append(Detail);
            _t.Element.html(grid);
            

            /*var htmlDetail = "<div>";
            htmlDetail += "<div class='w_20 f_l text_of'>1</div>";
            htmlDetail += "<div class='w_80 f_l text_of'>150990</div>";
            htmlDetail += "<div class='w_80 f_l text_of'>ทดสอบการเพิ่มสินค้า</div>";
            htmlDetail += "<div class='w_80 f_l text_of text_c'>10</div>";
            htmlDetail += "<div class='w_90 f_l text_of text_r'>250</div>";
            htmlDetail += "<div class='w_80 f_l text_of text_r'>2,500</div>"
            htmlDetail += "</div>";*/
            //htmlDetail += "<div class='clear_b'></div>";
            //$("#transac-d-SalesGoods").append(htmlDetail);
        }
    };
};