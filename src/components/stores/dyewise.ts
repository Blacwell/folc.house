import { writable } from "svelte/store";

enum Wise {
  System = "system",
  Light = "light",
  Dark = "dark",
}
enum Direction {
  Forward = "forward",
  Backward = "backward",
}

const options = [Wise.System, Wise.Light, Wise.Dark];

function setDyewise() {
  const localDyewise: Wise = localStorage.dyewise ?? Wise.System;

  const { subscribe, set, update } = writable(localDyewise);

  function getNext(currentWise: Wise, direction: Direction): Wise {
    const index = options.indexOf(currentWise);
    const newIndex = direction === Direction.Forward ? index + 1 : index - 1;
    const newWise =
      options.length - 1 <= index ? Wise.System : options[newIndex];
    localStorage.setItem("dyewise", newWise);
    setClass(newWise);
    return newWise;
  }

  function setClass(wise: Wise) {
    const root = document.documentElement;
    if (
      wise === Wise.Dark ||
      (wise === Wise.System &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  return {
    subscribe,
    next: () => update((n) => getNext(n, Direction.Forward)),
    former: () => update((n) => getNext(n, Direction.Backward)),
    reset: () => set(Wise.System),
  };
}

export const dyewise = setDyewise();
