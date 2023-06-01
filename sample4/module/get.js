export default function (target) {
  const val = document.querySelector(target);
  if (val) {
    return val;
  } else {
    throw new Error("오류발생");
  }
}
