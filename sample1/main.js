let del = document.querySelector(".del");
let view = document.querySelector(".view");
let list = document.querySelector(".list");



const show = () => {
  obj.forEach((item) => {
     li = document.createElement("li");
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
  li = document.createElement("li");
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
const unshow = () => {
  list.innerHTML = "";
};

 
view.addEventListener("click", (e) => {
  show();
});
del.addEventListener("click", (e) => {
  unshow();
});



const obj = [
  {
    name: "홍길동",
    job: "웹 퍼블리셔",
    call: "010-0000-0000",
    src: "./module/images/img0.jpg",
    on: "on",
  },
  {
    name: "전지현",
    job: "웹 디자이너",
    call: "010-0000-0000",
    src: "./module/images/img1.jpg",
    on: "off",
  },
  {
    name: "임지연",
    job: "풀스택 개발자",
    call: "010-0000-0000",
    src: "./module/images/img2.jpg",
    on: "on",
  },
  {
    name: "김태리",
    job: "프론트엔드 개발자",
    call: "010-0000-0000",
    src: "./module/images/img3.jpg",
    on: "off",
  },
  {
    name: "김다미",
    job: "데이터베이스 개발자",
    call: "010-0000-0000",
    src: "./module/images/img4.jpg",
    on: "on",
  },
  {
    name: "이승기",
    job: "서버 개발자",
    call: "010-0000-0000",
    src: "./module/images/img5.jpg",
    on: "on",
  },
];
const num = Math.floor(Math.random() * obj.length);
