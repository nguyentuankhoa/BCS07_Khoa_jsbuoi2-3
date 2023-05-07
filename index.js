//bai-1: viet chuong trinh tinh tien luong nhan vien.1ngay:100.000,luong bang luong 1ngay*so ngay lam
/** #input:
 *    + luong 1ngay = 100000
 *    + so ngay lam
 *    +lay du lieu so ngay lam cua nguoi dung 
 *  #xu ly:
 *    
 *    +tinh tien luong = luong 1 ngay * so ngay lam
 *  #output: tinh va xuat ra so tien luong nhan vien
 */
function luongNhanVien(){
    var soNgayLam = document.getElementById("soNgayLamViec").value*1;
    var tienLuong = soNgayLam*100000;
    console.log(tienLuong);
    document.querySelector("#hienThiKetQua").innerHTML = tienLuong;
}
document.querySelector("#tinhTienLuong").onclick = luongNhanVien;

//bai-2:viet chuong trinh nhap vao 5 so thuc.tinh gia tri trung binh cua 5 so nay va xuat ra man hinh

/** #input:
 *    +lay 5 so thuc cua nguoi dung
 *  #xu ly:
 *    +tinh trung binh: (5so cong lai) /5
 *  #output:
 *    +tinh va xuat ra gia tri trung binh cua nam so do
 */

function tinhGiaTriTrungBinh(){
    var soThuNhat = document.getElementById("soThucThuNhat").value*1;
    var soThuHai = document.getElementById("soThucThuHai").value*1;
    var soThuBa = document.getElementById("soThucThuBa").value*1;
    var soThuTu = document.getElementById("soThucThuTu").value*1;
    var soThuNam = document.getElementById("soThucThuNam").value*1;
    var tinhTrungBinh = (soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5;
    document.querySelector("#hienThiKetQuaTrungBinh").innerHTML = tinhTrungBinh;
}
document.querySelector("#trungBinh").onclick = tinhGiaTriTrungBinh;

//baitap-3: quy doi tien usd sang vnd khi nguoi dung nhap so tien usd, biet ty so la 23500.

/** #input:
 *    +lay so tien usd ma nguoi dung nhap
 *  #xyly:
 *    +quy doi tien: sotienusd*23500
 *  #output:
 *    +tinh va xuat ra so tien quy doi 
 */

function quyDoiTien(){
    var soTienUsd = document.getElementById("soTienUsd").value*1;
    var quyDoi = soTienUsd*23500;
    document.querySelector("#hienThiKetQuaTien").innerHTML = quyDoi + " " + "VND";
}
document.querySelector("#quyDoiTienUsd").onclick = quyDoiTien;

//baitap-4:tinh dien tich va chu vi hinh chu nhar biet dien tich = dai * rong,chu vi bang (dai+rong)*2

/** #input:
 *    +lay so chieu dai va chieu rong
 *  #xu ly:
 *    + dien tich = dai * rong
 *    + chu vi= (dai+rong)*2
 *  #output:
 *    +tinh va xuat ra dien tich va chu vi hinh chu nhat
 */
function tinhDienTichChuVi(){
    var chieuDai = document.getElementById("nhapChieuDai").value*1;
    var chieuRong = document.getElementById("nhapChieuRong").value*1;
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai+chieuRong)*2;
    document.querySelector("#hienThiKetQuaDienTichVaChuVi").innerHTML = "dien tich = " + dienTich + " " + "va chu vi =" + chuVi;
}
document.querySelector("#dienTichVaChuVi").onclick = tinhDienTichChuVi;

//baitap-5:viet chuong trinh nguoi dung nhap so co 2 ky so, tinh tong so do va xuat ra man hinh

/** # input:
 *    +lay so co 2 ky so cua nguoi dung
 *  #xyly:
 *    +lay so hang chuc : so / 10
 *    +lay so hang don vi: so %10
 *    + tong = so hang chuc + so hang don vi
 *  #output:
 *    + tinh va xuat ra tong cua so co 2 ky so
 */

function tinhTong (){
    var soCo2KySo = document.getElementById("soHaiKySo").value*1;
    var soHangChuc = Math.floor( soCo2KySo / 10);
    var soHangDonVi = Math.floor(soCo2KySo % 10);
var tong2KySo = soHangChuc + soHangDonVi;
document.querySelector("#hienThiTongKySo").innerHTML = "tong la :" + " " + tong2KySo;
}
document.querySelector("#tongSo").onclick = tinhTong;