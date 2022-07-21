export class Menu {
    danhSachMonAn = [];

    layMonAn = function () {
        if (localStorage.getItem("mangMonAn")) {
            let sMangMonAn = localStorage.getItem("mangMonAn");
            this.danhSachMonAn=JSON.parse(sMangMonAn);
        }
    };
    luuMonAn = function () {
        let sMangMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem("mangMonAn", sMangMonAn);
    };

    xoaMonAn= function (id) {
        let indexId= this.danhSachMonAn.findIndex(mon=>mon.foodID===id);
        this.danhSachMonAn.splice(indexId,1);    
    }

    layThongTinMonAn= function (id) {
        let monAnLayRa= this.danhSachMonAn.find(mon=>mon.foodID===id);
        return monAnLayRa;
    }
    capNhatMonAn= function (id,monAnCapNhat) {
          let monAnTrongMang= this.layThongTinMonAn(id);
          for(let key in monAnTrongMang) {
            monAnTrongMang[key]=monAnCapNhat[key];
          }
    }
}


