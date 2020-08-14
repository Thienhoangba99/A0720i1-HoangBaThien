function bai1() {
     let a = prompt("nhap vao so a");
     let b = prompt("nhap vao so b");
     if (a % b == 0){
         alert(a + " chia het cho "+ b);
     }
     else {
         alert(a + " khong chia het cho " + b);
     }
}
function bai2() {
    let age = prompt("Nhập vào tuuoi cua ban");
    if (age < 15 && age > 0) {
        alert("Bạn chưa đủ điều kiện là học sinh lớp 10");
    } else if (isNaN(age) || age < 0) {
        alert("tuổi phải lớn hơn 0");
    } else {
        alert("Bạn đủ điều kiện để học lớp 10");
    }
}
function bai3() {
    let number = prompt("Nhap vao so nguyen bat ki");
    if (number > 0){
        alert("so nguyen "+ number+" la so nguyen duong");
    }
    else if (number ===0){
        alert("so nguyen "+ number+" la so 0");
    }
    else {
        alert("so nguyen "+ number+" la so nguyen am");
    }
}
function bai4() {
    let a = prompt("Nhap vao so nguyen a");
    let b = prompt("Nhap vao so nguyen b");
    let c = prompt("Nhap vao so nguyen c");

    if (a > b && a > c){
        alert("a la so nguyen lon nhat");
    }
    else if (b > a && b > c){
        alert("b la so nguyen lon nhat");
    }
    else {
        alert("c la so nguyen lon nhat");
    }
}
function bai5() {
    let a = prompt("Nhập vào điểm Bài kiểm tra:", "");
    let b = prompt("Nhập vào điểm Bài thi giữa kì:", "");
    let c = prompt("Nhập vào điểm Bài thi cuối kì:", "");
    let avg = (a + b + c) / 3;
    if (a < 0 || isNaN(a) || isNaN(c) || c < 0 || isNaN(b) || b < 0) {
        alert("Nhập vào 3 số A, B, C phải lớn hơn 0 bạn ei!");
    } else {
        if (avg >= 8) {
            alert("Điểm trung bình: " + avg + " Xếp loại học lực giỏi!");
        } else if (avg >= 6.5) {
            alert("Điểm trung bình: " + avg + " Xếp loại học lực khá!");
        } else if (avg > 4.5) {
            alert("Điểm trung bình: " + avg + " Xếp loại học lực trung bình!");
        } else alert("Điểm trung bình: " + avg + " Xếp loại học lực kém!");
    }
}

function bai6() {
    let revenue = parseInt(prompt("Enter revenue on month:"));
    let hoahong;
    let tong;
    if (revenue < 0 || isNaN(revenue) || revenue === 0) {
        alert("revenure month must >=0 and not null");
    } else {hoahong
        if (revenue > 0) {
            hoahong = revenue * 0.1;
            tong = revenue + hoahong;
        } else if (revenue > 5000000&&revenue<10000000) {
            hoahong = revenue * 0.2;
            tong = revenue + hoahong;
        } else {
            hoahong = revenue * 0.3;
            tong = revenue + hoahong;
        }
        alert("revenue of this month is: " + hoahong+ "\n\tong thu nhap thang nay: " + tong);
    }
}

function bai7() {
    let get_Minute = parseInt(prompt("Enter the minute call of month: "));
    let phi = 0;
    let tong;
    const phicodinh = 25;
    if (get_Minute <= 0 || isNaN(get_Minute)) {
        alert("minute must >= 0 and not null")
    } else {
        if (get_Minute > 200)
            phi = (get_Minute - 200) * 200 + 150 * 400 + 50 * 600;
        else if (get_Minute > 50)
            phi = (get_Minute - 50) * 400 + 50 * 600;
        else
            phi = get_Minute * 600;
        tong = (0.01 * phi + phicodinh )*1000;
    }
    alert("Số phút gọi tháng này " + get_Minute +" và Số tiền điện thoại tháng này là: "+ tong);
}