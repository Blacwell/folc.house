<script lang="ts">
  import Marcle from "@components/marcle.svelte";
</script>

<div
  class="mt-6 mb-64 flex items-center justify-center gap-1 fill-gold-40 font-display 
  text-xl font-medium uppercase text-grey-10"
>
  <p class="uicase">History</p>
  <Marcle path={{ solid: "top" }} class="h-3 w-3 text-gold-40" />
  <p class="uicase">Tradition</p>
  <Marcle path={{ solid: "top" }} class="h-3 w-3 text-gold-40" />
  <p class="uicase">Culture</p>
</div>
