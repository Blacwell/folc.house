import { writable } from "svelte/store";

type wise = "system" | "light" | "dark";
type direction = "forward" | "backward";

const options: wise[] = ["system", "light", "dark"];

function setDyewise() {
  const localDyewise: wise = localStorage.dyewise ?? "system";

  const { subscribe, set, update } = writable(localDyewise);

  function getNext(currentWise: wise, direction: direction): wise {
    const index = options.indexOf(currentWise);
    const newIndex = direction === "forward" ? index + 1 : index - 1;
    const newWise = options.length - 1 <= index ? "system" : options[newIndex];
    localStorage.setItem("dyewise", newWise);
    setClass(newWise);
    return newWise;
  }

  function setClass(wise: wise) {
    const root = document.documentElement;
    if (
      wise === "dark" ||
      (wise === "system" &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  return {
    subscribe,
    next: () => update((n) => getNext(n, "forward")),
    former: () => update((n) => getNext(n, "backward")),
    reset: () => set("system"),
  };
}

export const dyewise = setDyewise();
