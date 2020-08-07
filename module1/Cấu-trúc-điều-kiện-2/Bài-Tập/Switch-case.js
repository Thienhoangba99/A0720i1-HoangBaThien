function showDay() {
    let m = document.getElementById("month");
    m = parseInt(m.value);
    let day;
    switch (m) {
        case 1:
            day="31 ngay";
            break;
        case 2:
            day="28 hoac 29 ngay";
            break;
        case 3:
            day="31 ngay";
            break;
        case 4:
            day="30 ngay";
            break;
        case 5:
            day="31 ngay";
            break;
        case 6:
            day="30 ngay";
            break;
        case 7:
            day="31 ngay";
            break;
        case 8:
            day="31 ngay";
            break;
        case 9:
            day="30 ngay";
            break;
        case 10:
            day="31 ngay";
            break;
        case 11:
            day="30 ngay";
            break;
        case 12:
            day="31 ngay";
            break;
    }
    document.getElementById("day").innerHTML=day;

}