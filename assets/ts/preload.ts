switch (localStorage.dyewise) {
  case "dark":
    document.documentElement.classList.add("dark");
    break;
  case "light":
    document.documentElement.classList.remove("dark");
    break;
  default:
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    break;
}
