import { obj, num } from "./module/data.js";
import { show, unshow,} from "./module/dataObj.js";

let del = document.querySelector(".del");
let view = document.querySelector(".view");
export const list = document.querySelector(".list");

view.addEventListener("click", (e) => {
  show(obj, num);
});
del.addEventListener("click", (e) => {
  unshow();
});
