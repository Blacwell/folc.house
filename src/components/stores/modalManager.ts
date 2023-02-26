import { Writable, writable } from "svelte/store";

type Modal = "updates" | "cover" | "inning about" | "inning overview" | null;

function setModal() {
  const { subscribe, set }: Writable<Modal> = writable(null);

  function activate() {}

  return {
    subscribe,
    set: (modal: Modal) => {
      document.documentElement.style.overflow = "hidden";
      set(modal);
    },
    unset: () => {
      document.documentElement.style.overflow = "unset";
      set(null);
    },
  };
}

export const modal = setModal();
