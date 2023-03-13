import { Writable, writable } from "svelte/store";

function setModal() {
  const { subscribe, set, update }: Writable<Modal> = writable(null);

  function getModal(modal: Modal) {
    const nextModalElement = document.getElementById(`modal-${modal}`);
    const button = document.getElementById(`modal-button-${modal}`);
    const dialog =
      nextModalElement instanceof HTMLDialogElement ? nextModalElement : null;

    return { dialog, button };
  }

  function setOverflow(value: "" | "hidden") {
    document.documentElement.style.overflow = value;
  }

  function closeModal(modal: Modal) {
    getModal(modal).dialog?.close();
    getModal(modal).button?.classList.remove("highlightOnDark");
    setOverflow("");
    return null;
  }

  function openModal(modal: Modal) {
    getModal(modal).dialog?.show();
    getModal(modal).button?.classList.add("highlightOnDark");
    setOverflow("hidden");
    return modal;
  }

  return {
    subscribe,
    set: (next: Modal) => {
      update((former) => {
        if (!getModal(next).dialog) {
          console.error(
            `Cannot find the element "modal-${next}". Is it included in the Astro layout file?`
          );
          return null;
        }

        closeModal(former);

        if (former === next) return null;
        else return openModal(next);
      });
    },
    close: () => update((modal: Modal) => closeModal(modal)),
  };
}

export const modal = setModal();
