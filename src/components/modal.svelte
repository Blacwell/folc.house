<script lang="ts">
  import { modal } from "@components/stores/modalManager";
  export let kind: "full" | "float";
</script>

<div class="fixed inset-0 z-50 bg-sea-30">
  <slot />
  {#if kind === "float"}
    <button on:click={() => modal.unset()}>X</button>
  {/if}
</div>
