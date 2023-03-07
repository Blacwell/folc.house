<script lang="ts">
  import SteerItems from "../steer/steer-items.svelte";
  import MarcleItems from "../steer/marcle-items.svelte";
  import Brandmarc from "@svgs/brandmarc.svelte";
  import Pattern from "@svgs/berry-pattern.svelte";
  import { modal } from "@components/stores/modalManager";
  import Modal from "@components/modal.svelte";
  import Marcle from "@components/marcle.svelte";
</script>

{#if $modal === "cover"}
  <Modal kind="full">
    <div
      class="andwork-cloth | relative h-full w-full bg-blood-30 pb-8 text-gold-40"
    >
      <Pattern class="absolute z-0 mx-12 fill-blood-5/60" />
      <div
        class="relative z-10 grid h-full w-full grid-rows-cover place-items-center"
      >
        <Brandmarc class="w-20 fill-gold-40" />
        <SteerItems />
        <MarcleItems />
        <button
          on:click={() => modal.unset()}
          class="bottom-2 mx-auto grid h-12 w-12 place-content-center bg-blood-20"
        >
          <Marcle path={{ outline: "xMark" }} />
        </button>
      </div>
    </div>
  </Modal>
{/if}

<style>
</style>
