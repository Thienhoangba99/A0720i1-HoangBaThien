function dientich() {
    let bankinh;
    bankinh=prompt("Nhap vao ban kinh hinh tron");
    let r= parseFloat(bankinh);
    let S = (r*r*3.14);
    document.write("dien tich hinh tron: " + S);
}