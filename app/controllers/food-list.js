import { Menu } from "../models/Menu.js";
import { LOAI_MON, TINH_TRANG } from "../models/constant/constant.js";
import {MonAn} from "../models/MonAn.js";


let menu= new Menu();

menu.layMonAn();


// console.log(menu);

const renderTableMonAn =(mangMonAn)=>{
    let html = "";
    for(let value of mangMonAn){
        let newMonAn= new MonAn();
        value={...newMonAn,...value};
        html += `
        <tr>
            <td>${value.foodID}</td>
            <td>${value.tenMon}</td>
            <td>${LOAI_MON[value.loai]}</td>
            <td>${value.giaMon}</td>
            <td>${value.khuyenMai}</td>
            <td>${value.tinhGiaKhuyenMai()}</td>
            <td>${TINH_TRANG[value.tinhTrang]}</td>
            <td>
                <button class="btn btn-danger" onclick=(xoaMonAn("${value.foodID}"))>Xoa</button>
                <button class="btn btn-primary" data-toggle="modal"
                data-target="#exampleModal" onclick=(suaMonAn("${value.foodID}"))>Sua</button>
            </td>
        </tr>
        `
    }
    // console.log(html)
    document.querySelector('#tbodyFood').innerHTML=html;
}

renderTableMonAn(menu.danhSachMonAn);

window.xoaMonAn=(id)=>{
    menu.xoaMonAn(id);
    renderTableMonAn(menu.danhSachMonAn);
    menu.luuMonAn();
}

window.suaMonAn=(id)=>{
    console.log(id)
    let layThongTinMonAn= menu.layThongTinMonAn(id);
    console.log(layThongTinMonAn)
    let arrFoodCapNhat= document.querySelectorAll('#foodForm input ,#foodForm select,#foodForm textarea');
    for (let input of arrFoodCapNhat){
        let {id}= input;
        input.value= layThongTinMonAn[id];
    }

}


document.querySelector('#btnCapNhat').onclick= ()=> {
    let monAnCapNhat= new MonAn();
    let arrFoodCapNhat= document.querySelectorAll('#foodForm input ,#foodForm select,#foodForm textarea');
    for (let input of arrFoodCapNhat){
        let {id}= input;
        monAnCapNhat[id]= input.value;
    }
    menu.capNhatMonAn(monAnCapNhat.foodID,monAnCapNhat);
    renderTableMonAn(menu.danhSachMonAn);
    menu.luuMonAn();
}

document.querySelector('#btnThemMon').onclick= ()=> {
    let monAn= new MonAn();
    let arrFoodCapNhat= document.querySelectorAll('#foodForm input ,#foodForm select,#foodForm textarea');
    for (let input of arrFoodCapNhat){
        let {id}= input;
        monAn[id]= input.value;
    }
    menu.danhSachMonAn.push(monAn);
    menu.luuMonAn();
    menu.layMonAn();
    renderTableMonAn(menu.danhSachMonAn);
}


