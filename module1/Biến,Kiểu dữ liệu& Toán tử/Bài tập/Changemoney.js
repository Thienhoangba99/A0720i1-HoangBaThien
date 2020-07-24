
function changemoney() {

    let fromCurrency=document.getElementById("Currency");
    let toCurrency=document.getElementById("ToCurrency").value;
    let money= document.getElementById("money").value;
    let M= parseFloat(money);
    let Cr;
    let TCr;a
    let R;
    switch(fromCurrency.value) {
        case "US":
            Cr = 1;
            break;
        case "VN":
            Cr = 0.000043;
            break;
        case "UK":
            Cr =1.28 ;
            break;
        case "EU":
            Cr =1.15 ;
            break;
    }
    switch(TC) {
        case "US":
            TCr = 1;
            break;
        case "VN":
            TCr = 0.000043;
            break;
        case "UK":
            TCr =1.28 ;
            break;
        case "EU":
            TCr =1.15 ;
            break;
    }
    R = parseFloat(((M*Cr)/TCr)).toFixed(4);
    document.getElementById("CrAfterChange").innerHTML=R;
    //document.write(R);

}
