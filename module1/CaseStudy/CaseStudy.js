function tinhtien() {
    let type= document.getElementById("typeRoom");
    let d = document.getElementById("day").value;
    let price;
    let discount = 0;
    discount = document.getElementById("discount");
    discount = parseInt(discount.value);
    switch (type.value) {
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
    d = parseInt(d);
    let S = ((d * price)-((d * price)* (discount/100)));
    document.getElementById("tong").innerHTML="Tong so tien can thanh toan la: " +S;
}



