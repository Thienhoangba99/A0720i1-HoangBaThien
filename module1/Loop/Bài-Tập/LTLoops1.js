function bai1() {
    let i = 0;
    while (i<100){
        if (i === 99){
            alert("Complete ");
        }
        document.write(i);
        i += 1;
    }
}
function bai2() {
    let temp = prompt("Enter temperature");

    while (temp<20 || temp>100 || isNaN(temp)){
        alert("Nhap lai temp");
        temp = parseInt(prompt("Enter temp"));
    }
    alert("Temp now is " + temp);
}

function bai3() {
    let a0 = 0;
    let a1 = 1;
    let temp;
    let result = a0 + ' ' + a1 + ' ';
    let count = 2;
    while (count <= 20) {
        temp = a0 + a1;
        a0 = a1;
        a1 = temp;
        result += temp + " ";
        count++;
    }
    alert(result)
}

function bai4() {
    let a0 = 0;
    let a1 = 1;
    let x;
    let count = 2;
    while (count <= 20) {
        x = a0 + a1;
        a0 = a1;
        a1 = x;
        if (x%5 === 0)
            {
                alert(x);
                break;
            }
        count++;
    }
}

function bai5() {
    let a0 = 0;
    let a1 = 1;
    let temp;
    let result = 0;
    let count = 2;
    while (count < 20) {
        temp = a0 + a1;
        a0 = a1;
        a1 = temp;
        result += temp;
        count++;
    }
    alert(result)
}

function bai6() {
    let sum =0;
    let count =0;
    let i = 0;
    while (count<30){
        if (i%7===0){
            sum += i;
            count++;
        }
        i++
    }
    alert(sum);
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