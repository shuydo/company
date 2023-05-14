import Tabs from "./tabs.js";
// --------------------------- theme toggling ---------------
if (localStorage.getItem("dark"))
  canvas.classList.add("dark"), (themeToggler.checked = !0);
else if (themeToggler.checked) themeToggler.checked = false;

themeToggler.addEventListener("click", () => {
  if (themeToggler.checked) localStorage.setItem("dark", 1);
  else localStorage.removeItem("dark");
  canvas.classList.toggle("dark");
});

// ----------------------------- // const tabs =
new Tabs({ rootSelector: "#footer", activeTab: 1 });

// ------------------- templates change ------------------
const templ1 = document.querySelector(".template-1");
const templ2 = document.querySelector(".template-2");
const choice = document.querySelector(".template-choice");

const changeBackground = (source, destination) =>
  (destination.style.background = window.getComputedStyle(source).background);

templ1.addEventListener("click", () => changeBackground(templ1, choice));
templ2.addEventListener("click", () => changeBackground(templ2, choice));

choice.style.background = window.getComputedStyle(templ1).background;
