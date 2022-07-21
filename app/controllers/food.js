import { MonAn } from "../models/MonAn.js";
import { LOAI_MON, TINH_TRANG } from "../models/constant/constant.js";
// console.log(MonAn);
// console.log(LoaiMon);
import { Translate } from '../translate/Vi.js';
import { Menu } from '../models/Menu.js';


let menu = new Menu();
// mangMonAn = menu.danhSachMonAn;
menu.layMonAn(); 
// console.log(menu.danhSachMonAn)

document.querySelector("#btnThemMon").onclick = () => {
  let arrInputFood = document.querySelectorAll(
    ".col-md-6 input , .col-md-6 select , .form-group input, .mb-3 textarea"
  );
  let food = new MonAn();
  for (let input of arrInputFood) {
    let { id, value } = input;
    food[id] = value;
  }

  // console.log(food);
  renderFoodDetail(food);
};
let renderFoodDetail = (food) => {
  // console.log()
  let html = "";
  //  let loaiMon= new LoaiMon();
  for (let key in food) {
    let value = food[key];
    if (typeof food[key] == "function") {
      value = food[key]();
    }
    switch (key) {
      case "loai":
        {
          value = LOAI_MON[food[key]];
          break;
        }
      case "tinhTrang":
        {
          value = TINH_TRANG[food[key]];
          break;
        }
      case 'hinhMon': {
        value = `<img src="${food[key]}" width="200px " height="100px">`;
        break;
      }
      default: {
        break;
      }
    }
    html += `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">${Translate[key]}</h6>
                </div>
                <span id="sp${key}" class="text-muted">
                ${value}
                </span>
            </li>`;
  }

  document.querySelector(".list-group").innerHTML = html;
  // console.log(food)
  // console.log( menu.danhSachMonAn)

  menu.danhSachMonAn.push(food);
  menu.luuMonAn();
  // luuMonAn();
};

// function luuMonAn() {
//   let sMangMonAn = JSON.stringify(mangMonAn);
//   localStorage.setItem("mangMonAn", sMangMonAn);
// }
// function layMonAn() {
//   if (localStorage.getItem("mangMonAn")) {
//     let sMangMonAn = localStorage.getItem("mangMonAn");
//     mangMonAn = JSON.parse(sMangMonAn);
//   }
// }

//render table food



// window.onload = function () {
//   layMonAn();
//   // console.log(mangMonAn)
// }
