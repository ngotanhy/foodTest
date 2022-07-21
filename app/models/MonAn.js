class MonAn {
    foodID = '';
    tenMon = '';
    loai = '';
    giaMon = 0;
    khuyenMai = '';
    tinhTrang = '';
    hinhMon = '';
    moTa = '';
    tinhGiaKhuyenMai = function () {
        return this.giaMon - (this.giaMon * this.khuyenMai / 100);
    }
}

export { MonAn };