function tinhtien() {
    let typeRoom= document.getElementById("typeRoom");
    let day = document.getElementById("day").value;
    let price;
    let discount = 0;
    let name = document.getElementById("name");
    let cardNumber = document.getElementById("cardNumber");
    let dayOfBirth = document.getElementById("dayOfBirth");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let customer = document.getElementById("customer");
    let quatityCome = document.getElementById("quatityCome");
    let typeCustomer = document.getElementById("typeCustomer");

    discount = document.getElementById("discount");
    discount = parseInt(discount.value);
    switch (typeRoom.value) {
        case "V":
            price = 500;
            break;
        case "R":
            price = 300;
            break;
        case "H":
            price = 100;
            break;

    }
    price = parseInt(price);
    day = parseInt(day);
    let S = ((day * price)-((day * price)* (discount/100)));
    document.getElementById("tong").innerHTML="Tong so tien can thanh toan la: " +S;
    alert("Xác nhận thông tin \n"+
        "Tên Khách hàng đặt: "+name.value+"\n" +
        "Mã Card number: "+ cardNumber.value +"\n" +
        "Ngày Sinh khách hàng: "+ dayOfBirth.value +"\n" +
        "Email của khách hàng: "+ email.value +"\n" +
        "Địa chỉ của khách hàng: "+ address.value +"\n" +
        "Hạng thành viên khách hàng: "+ customer.value +"\n" +
        "Mức giảm giá : "+ discount+" %"+"\n" +
        "Số lượng khách hàng đến: "+ quatityCome.value +"\n" +
        "Số ngày thuê: "+ day+"\n" +
        "Loại Phòng: "+ typeRoom.value+"\n" +
        "Loại khách hàng: "+ typeCustomer.value+"\n"

    )
}

jQuery(document).ready(function($) {
    $(window).load(function() {
        if ($('.wrapper-nav').length > 0) {
            var _top = $('.wrapper-nav').offset().top - parseFloat($('.wrapper-nav').css('marginTop').replace(/auto/, 0));
            $(window).scroll(function(evt) {
                var _y = $(this).scrollTop();
                if (_y > 50) {
                    $('.wrapper-nav').addClass('fixed');
                    $('.main-1').css("margin-top", "5px")
                } else {
                    $('.wrapper-nav').removeClass('fixed');
                    $('.main-1').css("margin-top", "0")
                }
            })
        }
    });
});



