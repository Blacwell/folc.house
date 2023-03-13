<script lang="ts">
  import bodings from "./stores/boder";

  $: {
    if ($bodings.length > 0) {
      setTimeout(() => bodings.trim(), 5000);
    }
  }
</script>

<dialog
  id="boding"
  class="fixed top-0 left-0 z-50 m-0 mt-4 ml-4 w-80 rounded border border-white bg-grey-95 px-4 py-1 shadow "
>
  {#each $bodings as boding}
    <p class="py-2">{boding}</p>
  {/each}
</dialog>

<style lang="postcss">
  dialog > :nth-child(1n + 2) {
    @apply border-t-2 border-black/20;
  }
</style>
