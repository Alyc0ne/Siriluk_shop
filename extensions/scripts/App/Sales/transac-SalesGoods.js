var transacSalesGoods = new setTransac();

$(document).ready(function () {
    transacSalesGoods.init();
});

function setTransac() {
    var _t = this;
    _t.Name = "Sales-Page";
    _t.Element = null;
    _t.init = function(){
        _t.htmlControl.getElement();
        _t.htmlControl.genGrid();
        //11
    };

    _t.htmlControl = {
        getElement: function () {
            _t.Element = $("#" + _t.Name);
            return _t.Element;
        },
        genGrid: function () {
            var LeftBox = $('<div class="col-8" style="background-color:#f2f2f2;text-align:center;"></div>');
            //LeftBox.append("<input list='Goods' class='w-75' id='GoodsBarcode' style='height:30px'>");
            //LeftBox.append("<datalist id='Goods'></datalist>");

            LeftBox.append("<a onclick='ShowModalGoods();'>Please CUM !!</div></a>");

            var Rightbox = $('<div class="col-4" style="min-height: 768px !important;"></div>');
            var gridStart = $('<div class="row h_100" style="border-left:solid 1px #bfbfbf;"></div>"');
            //var gridEnd = $('<div class="row" style="border-left:solid 1px #bfbfbf;"></div>');

            //var transac_body = $('<div class="w-100 h_10 p-3 text_c bg_white" style="border:solid 1px red;height:80px;padding:5px;line-height:60px;"></div>');
            gridStart.append("<div class='col-12 align-self-start p_a5' style='overflow:auto;height:75%;' id='transac-body'></div>");
            //gridStart.append("<div class='w-100 h_10 p-3 text-center bg_white' style='border:solid 1px red;height:80px;'>ไม่มีข้อมูลสินค้า</div>");
            //transac_body.append("<div class='w-100 h-100 p-3'>ไม่มีข้อมูลสินค้า</div>");
            //gridStart.append(transac_body);
            //Rightbox.append(gridStart);

            var gridEnd = $('<div class="col-12 align-self-end" style="border-top:solid 1px #bfbfbf;"></div>');
            var sub_total = $('<div class="bg_white w-100 p-3 h_p20 p_all10"></div>');
            sub_total.append("<div class='w-75 float-left'>รวมเงิน : </div>");
            sub_total.append("<input type='text' class='w-25 float-right text-right' style='border:none;font-weight:bold;' id='sub_total' name='sub_total' value='1,000.00' readonly></input>");
            sub_total.append("<div class='clear_b sub_line'></div>");
            gridEnd.append(sub_total);

            var discount = $('<div class="bg_white w-100 p-3 h_p20 p_all10"></div>');
            discount.append("<div class='w-75 float-left'>ส่วนลด : </div>");
            discount.append("<input type='text' class='w-25 float-right text-right _number' style='font-weight:bold;' id='discount' name='discount' value='5.00%'></input>");
            discount.append("<div class='clear_b sub_line'></div>");
            gridEnd.append(discount);

            var total = $('<div class="bg_white w-100 p-3 h_p20 p_all10"></div>');
            total.append("<div class='w-75 float-left'>จำนวนเงินทั้งสิ้น : </div>");
            total.append("<input type='text' class='w-25 float-right text-right' style='border:none;font-weight:bold;' id='total' name='total' value='5.00%' readonly></input>");
            total.append("<div class='clear_b'></div>");
            gridEnd.append(total);

            var pay = $('<div class="w-100"></div>');
            pay.append("<button class='btn btn-success w-100 p-3'>จ่ายชำระ</button>");
            gridEnd.append(pay);
            gridStart.append(gridEnd);

            Rightbox.append(gridStart);

            _t.Element.append(LeftBox);
            _t.Element.append(Rightbox);
        }
    };
    _t.gridControl = {
        addData: function () {
            var gridData = $('<div class="w-100 h-25 p-3">ทดสอบ</div>');
            var _t_body = _t.Element.find('#transac-body');
            var product = $('<div class="w-100 h_10 p-3 bg_white m_b5" style="border:solid 1px red;height:80px;"></div>');
            product.append("<div class='w_10 float-left text-center'><input type='number' class='w-100' name='GoodsQty' min='1' max='99'></div>");
            product.append("<div class='w-50 float-left text-left'>เอสเพรสโซ่พาโทนัม</div>");
            product.append("<div class='w_40 float-left text-right'>2,000.00</div>");
            _t_body.append(product);
        }
    };
};