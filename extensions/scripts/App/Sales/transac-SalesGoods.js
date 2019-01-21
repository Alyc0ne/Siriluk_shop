var transacSalesGoods = new setTransac();

$(document).ready(function () {
    transacSalesGoods.init();
});

var GrandTotal = 0;
var sub_total = 0;
var arr_Data = new Array();
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
            var LeftBox = $('<div class="col-8" style="text-align:center;"></div>');
            LeftBox.append("<input list='Goods' class='w-75 input-icon-barcode' id='GoodsBarcodeSearch' style='height:30px;margin-top:2%;'>");
            LeftBox.append("<datalist id='Goods'></datalist>");

            var Rightbox = $('<div class="col-4"></div>'); //style="min-height: 768px !important;"
            var gridStart = $('<div class="row h_100" style="border-left:solid 1px #bfbfbf;"></div>"');
            gridStart.append("<div class='col-12 align-self-start p_a5' style=';height:5%;border:solid 1px red;'></div>");
            gridStart.append("<div class='col-12 align-self-start p_a5' style='overflow:auto;height:70%;' id='transac-body'></div>");

            var gridEnd = $('<div class="col-12 align-self-end" style="border-top:solid 1px #bfbfbf;padding:2px!important;"></div>');
            var sub_total = $('<div class="bg_white w-100 p-3 h_p20 p_all10"></div>');
            sub_total.append("<div class='w-75 float-left'>รวมเงิน : </div>");
            sub_total.append("<input type='text' class='w-25 float-right text-right' style='border:none;font-weight:bold;' id='sub_total' name='sub_total' value='' readonly></input>");
            sub_total.append("<div class='clear_b sub_line'></div>");
            gridEnd.append(sub_total);

            var discount = $('<div class="bg_white w-100 p-3 h_p20 p_all10"></div>');
            discount.append("<div class='w-75 float-left'>ส่วนลด : </div>");
            discount.append("<input type='text' class='w-25 float-right text-right _number' style='font-weight:bold;' id='discount' name='discount' value=''></input>");
            discount.append("<div class='clear_b sub_line'></div>");
            gridEnd.append(discount);

            var total = $('<div class="bg_white w-100 p-3 h_p20 p_all10"></div>');
            total.append("<div class='w-75 float-left'>จำนวนเงินทั้งสิ้น : </div>");
            total.append("<input type='text' class='w-25 float-right text-right' style='border:none;font-weight:bold;' id='totalPrice' name='totalPrice' value='' readonly></input>");
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
        getData_uid: function (uid){
            if(uid != null || uid != ""){
                var GoodDetail = _t.Element.find("#transac-body #GoodDetail[data-uid='" + uid +  "']");
                var obj = {
                    GoodsQty: GoodDetail.children()[1].textContent,
                    GoodsName:GoodDetail.children()[2].textContent,
                    GoodsPrice:GoodDetail.children()[3].textContent,
                }
                return obj;
            }
        },
        addData: function (GoodsID,GoodsQty,GoodsName,GoodsPrice) {
            var _t_body = _t.Element.find('#transac-body');
            var uid = RandomMath();
            var Goods = $('<div class="w-100 h_5 p-3 bg_white m_b5" id="GoodDetail" data-uid="' + uid + '"></div>');
            Goods.append("<div class='w_5 float-left text-left m_r10'><span class='imageDel' style='cursor:pointer;'><input type='hidden' value='1234'></span></div>");
            //Good.append("<div class='w_10 float-left text-center m_r10'><input type='text' class='w-100 h_0 text-center' name='GoodsQty' min='1' max='99' value='24'></div>");
            Goods.append("<div class='w_10 float-left text-center m_r10'><span class='w-100 h_0 text-center' name='GoodsQty' style='border:solid 1px black;padding:3px;'>"  + GoodsQty + "</span></div>");
            Goods.append("<div class='w_60 float-left text-left'><span>" + GoodsName + "</span></div>");
            Goods.append("<div class='w_20 float-left text-right'><span>" + GoodsPrice + "</span></div>");
            _t_body.append(Goods);
            arr_Data.push({
                uid : uid,
                GoodsID : GoodsID,
                GoodsName : GoodsName,
                GoodsQty : GoodsQty,
                GoodsPrice : GoodsPrice,
                TotalAmnt : (GoodsPrice * GoodsQty)
            });
            var sumPrice = GoodsQty * GoodsPrice;
            return sumPrice;
        },
        calSummary: function (plus,GoodsPrice,Discount) {
            if (GoodsPrice != null || GoodsPrice != "" || GoodsPrice != 0 || typeof GoodsPrice == "undefined") {
                if(plus){
                    GrandTotal += GoodsPrice;
                    sub_total += GoodsPrice;
                }else{
                    GrandTotal -= GoodsPrice;
                    sub_total -= GoodsPrice;
                }
            }
        
            if (Discount != null && Discount != "" && Discount != 0 && typeof Discount != "undefined") {
                if (Discount.indexOf('%') >= 0) {
                    var dis = Discount.split('%');
                    var sumDis = (GrandTotal * dis) / 100;
                    GrandTotal = sumDis;
                }else{
                    GrandTotal -= Discount;
                }
            }else{
                $("#totalPrice").val(); 
            }

            $("#sub_total").val(numberWithCommas(sub_total.toFixed(2)));
            $("#totalPrice").val(numberWithCommas(GrandTotal.toFixed(2))); 
            
        },
        removeGoods: function (uid){
            var index = arr_Data.map(x => {
                return x.uid;
            }).indexOf(uid);
            arr_Data.splice(index,1);

            var GoodDetail = _t.Element.find("#transac-body #GoodDetail[data-uid='" + uid +  "']");
            var dataOneRow = _t.gridControl.getData_uid(uid);
            var GoodsPrice = parseFloat(dataOneRow.GoodsQty) * parseFloat(dataOneRow.GoodsPrice.replace(/,/g, ''));
            _t.gridControl.calSummary(false,GoodsPrice);
            GoodDetail.remove();
        },
        countGoodsTransac: function () {
            var tGrid = _t.Element.find("#transac-body #GoodDetail");
            return tGrid.length;
        },
        selectDataGrid: function (){
            return arr_Data;
        },
        updateGoodsByIndex: function (uid,GoodsQty) {
            var Goods = _t.gridControl.selectDataGrid();
            if (Goods.length != 0) {
                var index = Goods.findIndex((x => x.uid == uid));
                if (index != null) {
                    var Old_qty = Goods[index].GoodsQty;
                    Goods[index].GoodsQty = Old_qty + GoodsQty;
                    var GoodsPrice = Goods[index].GoodsPrice * GoodsQty;
                    _t.Element.find("#transac-body #GoodDetail[data-uid='" + uid +  "']")
                    _t.gridControl.calSummary(true,GoodsPrice);
                }
            }
        }
    };
};