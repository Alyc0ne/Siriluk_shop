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
            var grid = $('<div id="transacSales" class="w_p100" style="display: table;height: 30px;"></div>"');
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
            var Detail = $('<div id="transacSales-D" style="max-height:400px;height:400px;"></div>');
            Detail.append("<div class='w_p100 text_c bg_white' style='border-bottom:solid 1px #bfbfbf;height:80px;padding:5px;line-height:60px;'>ไม่มีข้อมูลสินค้า</div>");

            //grid.append(Header);
            grid.append(Detail);

            //Payment
            var Payment = $('<div style="width:100%;min-height:200px;border-top:solid 1px #bfbfbf"></div>');
            var sub_total = $('<div class="bg_white w_p100 mh_40"></div>');
            sub_total.append("<div class='w_p60 p_all10 f_l'>รวมเงิน : </div>");
            sub_total.append("<input type='text' class='p_all10 text_r w_p40 f_r' style='border:none;font-weight:bold;' id='sub_total' name='sub_total' value='1,000.00' readonly></input>");
            sub_total.append("<div class='clear_b sub_line'></div>");
            Payment.append(sub_total);

            //Discount
            var discount = $('<div class="bg_white w_p100 mh_40"></div>');
            discount.append("<div class='w_p60 p_all10 f_l'>ส่วนลด : </div>");
            discount.append("<input type='text' class='p_all10 text_r w_p40 f_r' style='border:none;font-weight:bold;' id='discount' name='discount' value='5.00%'></input>");
            discount.append("<div class='clear_b sub_line'></div>");
            Payment.append(discount);

            //Total
            var total = $('<div class="bg_white w_p100 mh_40"></div>');
            total.append("<div class='w_p60 p_all10 f_l'>จำนวนเงินทั้งสิ้น : </div>");
            total.append("<input type='text' class='p_all10 text_r w_p40 f_r' style='border:none;font-weight:bold;' id='total' name='total' value='5.00%'></input>");
            total.append("<div class='clear_b'></div>");
            Payment.append(total);

            //Button Pay
            var pay = $('<div class="w_p100 mh_150"></div>');
            pay.append("<button class='btn btn-success w_p100 h_p100'>จ่ายชำระ</button>");
            Payment.append(pay);

            grid.append(Payment);
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