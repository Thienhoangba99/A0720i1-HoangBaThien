function bai1() {
    let a0 = 0;
    let a1 = 1;
    let temp;
    let result = a0 + ' ' + a1 + ' ';
    let count = 2;
    while (count <= 1000) {
        temp = a0 + a1;
        a0 = a1;
        a1 = temp;
        result += temp + " ";
        count++;
    }
    alert(result)
}
function bai2() {
    let count=1;
    let getNumber = parseInt(prompt("Nhap vao so nguyen duong"));
    let result = 1;
    if(getNumber<0 || getNumber>1000 || isNaN(getNumber)) {
        alert("Number enter must be > 0");
    }
    else {
        while (count <= getNumber){
            result *= count;
            count++;
        }

    }
    alert(getNumber+"! = " + result);
}

function bai3() {
    alert("Dang trong qua trinh nghien cuu! Vui long thu lai sau")
}

function bai4() {
    let result='';
    let a = prompt("Nhap vao canh a");
    let b = prompt("Nhap vao canh b");

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            if (i===0 || i===(a-1)  && j < b){
                result += '*';
            }
            else if(j===0 || j=== (b-1) ){
                result += "*"
            }
            else {
                result += " " +'&nbsp;';
            }
        }
        result += "<br>";
    }
    console.log(result);
    document.write(result);
}

function bai5() {
    let get_Money = parseInt(prompt("Nhập vào số tiền muốn vay:", ""));
    let get_Month = parseInt(prompt("Nhập vào số tháng muốn vay:", ""));
    // let total;
    if (get_Money <= 0 || isNaN(get_Money) || get_Month <= 0 || isNaN(get_Month)){
        alert("Nhập vào số tiền và số tháng muốn vay lớn hơn 0!");
    }
    else {
        for(let i = 0; i < get_Month; i++)
        {
            get_Money = get_Money + get_Money * 0.3 / 100;
        }
        alert("Số tiền phải trả sau: " + get_Month + " tháng là: " + Math.ceil(get_Money) );
    }
}

function bai6() {
   alert("dang nghien cuu! VUi long thu lai khi hoan thanh");
}

function bai7() {
    let result="";
    let i = 1;

    for (i = 0; i<100;i++){
        if (i%3===0&&i%5===0){
            result += "FizzBuzz\n"
            document.write(i);
        }
        else if(i%5 ===0){
            result += "Buzz\n"
            document.write(i);
        }
        else if (i%3===0){
            result += "Fizz\n"
            document.write(i);
        }

        document.write(result);
        result="";
    }
}

function bai8() {
    let numBot = parseFloat(prompt("nhập khoảng bạn muốn đoán:\nNhập cận dưới:"));
    //nhập cận trên
    let numTop = parseFloat(prompt("nhập cận trên:"));
    //random số ngẫu nhiên
    let numRandom = Math.round(Math.random() * (numTop - numBot) + 1);
    //số lựa chọn
    let myNum = parseFloat(prompt("nhập số bạn đoán: "));
    //
    while(myNum != numRandom){
        while(myNum > numRandom){
            myNum = parseFloat(prompt("Lớn quá bạn ơi \n Nhập bé hơn nào:"));
        }
        while(myNum < numRandom){
            myNum = parseFloat(prompt("Bé quá bạn ơi \n Nhập lớn hơn nào:"));
        }
    }
    alert("chuẩn quá bạn ê, chơi xổ số được đó")
}