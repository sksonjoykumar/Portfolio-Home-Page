// select all html id
const themeBtn = document.getElementById("theme-btn");

// window function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  themeBtn.addEventListener("click", function () {
    if (document.body.classList.toggle("color-theme")) {
      themeBtn.classList.remove("fa-moon");
      themeBtn.classList.add("fa-sun");
    } else {
      themeBtn.classList.add("fa-moon");
      themeBtn.classList.remove("fa-sun");
    }
  });
}
