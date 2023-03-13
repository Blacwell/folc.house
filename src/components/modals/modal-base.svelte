<script lang="ts">
  import Brandmarc from "@svgs/brandmarc.svelte";

  export let id: string;
</script>

<dialog
  {id}
  class="fixed inset-0 z-40 h-full w-full bg-white/70 px-2 pt-2 pb-16 backdrop-blur-sm"
>
  <div
    class="relative flex h-full w-full flex-col overflow-hidden bg-grey-15 px-6 py-8 text-white"
  >
    <a href="/">
      <Brandmarc class="mx-auto mb-8 w-20 fill-yellow" />
    </a>
    <div
      class="relative flex h-full w-full flex-col items-center justify-start overflow-y-scroll"
    >
      <slot />
    </div>
  </div>
</dialog>
