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
            var fullGrid = $('<div></div>');
            var gridStart = $('<div class="row align-items-start w_p100 h_p75" style="border-left:solid 1px #bfbfbf;"></div>"');
            var gridEnd = $('<div class="row align-items-end w_p100 h_p25" style="border-left:solid 1px #bfbfbf;"></div>');

            //Header
            /*var Header = $('<div id="transacSales-H"></div>');
            Header.append("<div style='background-color:aquamarine;width: 500px;display: table;height: 30px;'>");
            Header.append("<div class='w_p10 f_l p_all'>#</div>");
            Header.append("<div class='w_p15 f_l p_all'>รหัสสินค้า</div>");    
            Header.append("<div class='w_p30 f_l p_all'>ชื่อสินค้า</div>");     
            Header.append("<div class='w_p15 f_l text_c p_all'>จำนวน</div>");     
            Header.append("<div class='w_p15 f_l text_r p_all'>ราคา/หน่วย</div>");     
            Header.append("<div class='w_p15 f_l text_r p_all'>จำนวนเงิน</div>");
            Header.append("</div>");*/

            //Detail
            //var Detail = $('<div id="transacSales-D" style="max-height:400px;height:400px;"></div>');
            gridStart.append("<div class='w_p100 text_c bg_white' style='border-bottom:solid 1px #bfbfbf;height:80px;padding:5px;line-height:60px;'>ไม่มีข้อมูลสินค้า</div>");
            fullGrid.append(gridStart);
            //grid.append(Header);
            //grid.append(Detail);

            //Payment

            var sub_total = $('<div class="bg_white w_p100 h_p20 p_all10"></div>');
            sub_total.append("<div class='w_p60 f_l'>รวมเงิน : </div>");
            sub_total.append("<input type='text' class='text_r w_p40 f_r p_r20' style='border:none;font-weight:bold;' id='sub_total' name='sub_total' value='1,000.00' readonly></input>");
            sub_total.append("<div class='clear_b sub_line'></div>");
            gridEnd.append(sub_total);

            //Discount
            var discount = $('<div class="bg_white w_p100 h_p20 p_all10"></div>');
            discount.append("<div class='w_p60 f_l'>ส่วนลด : </div>");
            discount.append("<input type='text' class='text_r w_p40 f_r p_r20 _number' style='font-weight:bold;' id='discount' name='discount' value='5.00%'></input>");
            discount.append("<div class='clear_b sub_line'></div>");
            gridEnd.append(discount);

            //Total
            var total = $('<div class="bg_white w_p100 h_p20 p_all10"></div>');
            total.append("<div class='w_p60 f_l'>จำนวนเงินทั้งสิ้น : </div>");
            total.append("<input type='text' class='text_r w_p40 f_r p_r20' style='border:none;font-weight:bold;' id='total' name='total' value='5.00%' readonly></input>");
            total.append("<div class='clear_b'></div>");
            gridEnd.append(total);

            //Button Pay
            var pay = $('<div class="w_p100 h_p40 p_all10"></div>');
            pay.append("<button class='btn btn-success w_p100 h_p100 p_all20'>จ่ายชำระ</button>");
            gridEnd.append(pay);
            fullGrid.append(gridEnd);

            _t.Element.html(fullGrid);
            //_t.Element.html(gridEnd);

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