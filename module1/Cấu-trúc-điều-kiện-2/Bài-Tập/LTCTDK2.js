function bai1() {
    let a = prompt("Nhap vao do C");
    let b = (a* (9/5) + 32);
    b = b.toFixed(2);
    alert("Do F la: "+ b);
}
function bai2() {
    let a = prompt("Nhap vao met");
    let b = (a*3.2808);
    b = b.toFixed(4);
    alert("Doi ra feet la: "+ b);
}
function bai3() {
    let a = prompt("Nhap canh a cua hinh vuong (m):");
    let s = (a*a);
    alert("dien tich hinh vuong la: " + s + "m2");
}
function bai4() {
    let a = prompt("Nhap canh a cua hinh chu nhat:");
    let b = prompt("Nhap canh b cua hinh chu nhat:");
    let S = (a*b);
    alert("dien tich hinh chu nhat: "+S);

}
function bai5() {
    let A = prompt("Nhập vào cạnh A:");
    let B = prompt("Nhập vào cạnh B:");

    let S;
    if (A <= 0 || isNaN(A) || isNaN(B) || B <= 0) {
        alert("Nhập vào 2 số A, B phải lớn hơn 0");
    } else {
        S = ((1 / 2) * (A * B));
        alert("Diện tích hình tam giác vuông là: " + S);
    }
}

function bai6() {
    let a = prompt("Nhập vào số A:");
    let b = prompt("Nhập vào số B:");

    let root;
    if (a === 0) {
        if (b === 0)
            alert("Phuong trinh co vo so nghiem");
        else
            alert("Phuong trinh vo nghiem");
    } else {
        root = (-b / a);
        alert("Phương trình có nghiệm là: " + root);
    }
}

function bai7() {
    let a = prompt("Nhập vào số A:");
    let b = prompt("Nhập vào số B:");
    let c = prompt("Nhập vào số C:");
    let delta;
    let root1;
    let root2;
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                alert("Phương trình có vô số nghiệm");
            } else {
                alert("Phương trình vô cmn nghiệm");
            }
        } else {
            root1 = (-c / b);
            alert("Phương trình có nghiệm duy nhất: " + root1);
        }
    } else {
        delta = b * b - 4 * c * c;
        if (delta > 0) {
            root1 = (-b + Math.sqrt(delta)) / (2 * a);
            root2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert("Nghiệm thứ nhất: x1 = " + root1 + "\n" + "Nghiệm thứ 2: x2 = " + root2);
        } else if (delta === 0) {
            root1 = -b / 2 * a;
            alert("Phương trình có nghiệm kép là: x1 = x2 = " + root1);
        } else {
            alert("Phương trình vô nghiệm")
        }
    }
}

function bai8() {
    let age = prompt("nhap vao mot so nguyen: ");
    if (age==0 || isNaN(age) || age <=0 || age > 120){
        alert(age + " khong phai so tuoi cua mot nguoi");
    }
    else {
        alert(age + " la so tuoi cua mot nguoi");
    }

}

function bai9() {
    let a = prompt("Nhập vào cạnh A:");
    let b = prompt("Nhập vào cạnh B:");
    let c = prompt("Nhập vào cạnh C:");
    if (a < 0 || b < 0 || c < 0) {
        alert("Đây không phải 3 cạnh của tam giác!");
    } else if (((a + b) > c)
        && ((b + c) > a)
        && ((a + c) > b)) {
        alert("Đây là 3 cạnh của tam giác!");
    }
    else {
        alert("Đây không phải 3 cạnh của tam giác!");
    }

}

function bai10() {
    let oldNumber = prompt("Nhập vào số điện cũ:");
    let newNumber = prompt("Nhập vào số điện mới:");
    let used = newNumber-oldNumber;
    let s;

    if (used <= 100)

        s = used * 1000;

    else {
        if (used <= 150)
            s = 100 * 1000 + (used - 100) * 1200;
        else {
            if (used <= 200)
                s = 100 * 1000 + 50 * 1200 + (used - 150) * 2000;
            else {
                if (used >= 201)
                    s = 100 * 1000 + 50 * 1200 + 50 * 2000 + (used - 200) * 2500;
            }
        }
    }
    alert("Tổng tiền điện tháng này là: "+s);
}

function bai11() {

}

function bai12() {
    let getMoney = prompt("Nhập vào số tiền muốn vay:");
    let getMonth = prompt("Nhập vào số tháng muốn vay:");
    // let total;
    if (getMoney <= 0 || isNaN(getMoney) || get_Month <= 0 || isNaN(get_Month)){
        alert("Nhập vào số tiền và số tháng muốn vay lớn hơn 0!");
    }
    else {
        for(let i = 0; i < get_Month; i++)
        {
            getMoney = getMoney + getMoney * 0.3 / 100;
        }
        alert("Số tiền phải trả sau: " + get_Month + " tháng là: " + Math.ceil(getMoney) );
    }

}