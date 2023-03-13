<script lang="ts">
  import Marcle from "@components/marcle.svelte";
  import ModalBase from "@components/modals/modal-base.svelte";
  import bodings from "@components/stores/boder";

  const url = window.location.href;

  function copyUrl() {
    navigator.clipboard.writeText(url);
    bodings.add("Link copied to clipboard");
  }
</script>

<ModalBase id="modal-share">
  <h1 class="my-12 mt-8 text-center font-display text-2xl">
    Share this Uttering
  </h1>
  <div class="mb-8 inline-block">
    <div
      class="flex shrink items-center gap-2 overflow-hidden rounded 
      border border-grey-80 bg-white pl-3"
    >
      <input
        type="url"
        value={url}
        readonly
        class="h-fit w-full shrink bg-transparent text-black"
      />
      <button on:click={copyUrl} class="shrink-0 bg-red px-5 py-3">Copy</button>
    </div>
  </div>
  <div class="mt-8 grid grid-cols-2 gap-8">
    <div
      class="grid aspect-square w-16 flex-none place-items-center rounded-full bg-grey-90 text-grey-5 "
    >
      <Marcle
        shape={{ set: "brand", shape: "twitter" }}
        class="aspect-square w-10 fill-[#1DA1F2]"
      />
    </div>
    <div
      class="grid aspect-square w-16 flex-none place-items-center rounded-full bg-grey-90 text-grey-5 "
    >
      <Marcle
        shape={{ set: "brand", shape: "instagram" }}
        class="aspect-square w-10 fill-[#E4405F]"
      />
    </div>
    <div
      class="grid aspect-square w-16 flex-none place-items-center rounded-full bg-grey-90 text-grey-5 "
    >
      <Marcle
        shape={{ set: "brand", shape: "facebook" }}
        class="aspect-square w-10 fill-[#1877F2]"
      />
    </div>
    <div
      class="grid aspect-square w-16 flex-none place-items-center rounded-full bg-grey-90 text-grey-5 "
    >
      <Marcle
        shape={{ set: "brand", shape: "element" }}
        class="aspect-square w-10 fill-[#0DBD8B]"
      />
    </div>
  </div>
</ModalBase>
