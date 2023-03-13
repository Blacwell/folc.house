import { writable, Writable } from "svelte/store";

function bodings() {
  const { subscribe, set, update }: Writable<string[]> = writable([]);

  function getDialog() {
    const bodingElement = document.getElementById("boding");
    const bodingDialog =
      bodingElement instanceof HTMLDialogElement ? bodingElement : null;
    return bodingDialog;
  }
  return {
    subscribe,
    add: (newBoding: string) => {
      update((bodingList) => {
        getDialog()?.show();
        bodingList.unshift(newBoding);

        if (bodingList.length > 6) return bodingList.slice(0, -1);
        else return bodingList;
      });
    },
    trim: () =>
      update((bodingList) => {
        switch (bodingList.length) {
          case 0:
            return new Array();
          case 1:
            getDialog()?.close();
          default:
            return bodingList.slice(0, -1);
        }
      }),
    clear: () => set([]),
  };
}

export default bodings();
