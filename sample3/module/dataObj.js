import { obj, num } from "./data.js";
import { list } from "../main.js";


export const show = () => {
  obj.forEach((item) => {
    let li = document.createElement("li");
     li.innerHTML = `
      <img src=${item.src} alt=""/>
      <div class="textbox">
        <strong>${item.name}</strong>
        <span>${item.job}</span>
        <p>${item.call}</p>
      </div>
      <i class="xi-star ${item.on}"></i>`;
    list.appendChild(li);

    let icon = li.querySelector("i");
    icon.addEventListener("click", e => {
      on_off(icon);
    });
  });
  let li = document.createElement("li");
  li.innerHTML += `
  <img src=${obj[num].src} alt=""/>
  <div class="textbox">
    <strong>${obj[num].name}</strong>
    <span>${obj[num].job}</span>
    <p></p>${obj[num].call}</p>
  </div>
  <i class="xi-star ${obj[num].on}"></i>`;
  list.appendChild(li);

  let icon = li.querySelector("i");
  icon.addEventListener("click", () => {
    on_off(icon);
  });
};

const on_off = (icon) => {
  icon.classList.toggle("on");
  icon.classList.toggle("off");
};
export const unshow = () => {
  list.innerHTML = "";
};
 
