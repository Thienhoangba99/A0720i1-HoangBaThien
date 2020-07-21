function nhapdiem() {
    let VatLy;
    let HoaHoc;
    let SinhHoc;
    let TrungBinh;

    VatLy= prompt("Nhập điểm Vật Lý Bạn Êy");
    HoaHoc= prompt("Nhập điểm Hóa Học Bạn Êy");
    SinhHoc= prompt("Nhập điểm Sinh Học Bạn Êy");

    let VL= parseInt(VatLy);
    let HH= parseInt(HoaHoc);
    let SH= parseInt(SinhHoc);
    TrungBinh = ((VL+HH+SH)/3);

    document.write("Diem trung binh la: " +TrungBinh);
}