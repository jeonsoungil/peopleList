import { obj, num } from "./module/data.js";
import { show, unshow } from "./module/dataObj.js";
import get from "./module/get.js";

let del = get(".del");
let view = get(".view");
export const list = get(".list");

view.addEventListener("click", (e) => {
  show(obj, num);
});
del.addEventListener("click", (e) => {
  unshow();
});
