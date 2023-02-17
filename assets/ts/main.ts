const root = document.documentElement;
const toggle = document.getElementById("dye-toggle");
const toggleHandle = document.getElementById("toggle-handle");

function setTogglePosition() {
  if (!toggleHandle) return;
  switch (localStorage.dyewise) {
    case "dark":
      toggleHandle.style.left = "100%";
      break;
    case "light":
      toggleHandle.style.left = "0%";
      break;
    default:
      toggleHandle.style.left = "50%";
      break;
  }
}
setTogglePosition();

toggle?.addEventListener("click", () => {
  switch (localStorage.dyewise) {
    case "light":
      localStorage.dyewise = "dark";
      root.classList.add("dark");
      break;
    case "dark":
      localStorage.dyewise = "system";
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      break;
    default:
      localStorage.dyewise = "light";
      root.classList.remove("dark");
      break;
  }
  setTogglePosition();
});
