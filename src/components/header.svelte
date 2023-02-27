<script lang="ts">
  import Marcle from "@components/marcle.svelte";
</script>

<div
  class="relative mb-6 flex h-16 w-full items-center justify-between bg-blood-20 px-4 text-gold-40 lg:hidden"
>
  <div class="w-16" />
  <div>
    <a href="/" class="link">
      <h1
        class="h-fit w-fit border-2 border-gold-40 px-2 pt-1.5 pb-0.5 font-display text-xl font-semibold uppercase"
      >
        Folchouse
      </h1>
    </a>
  </div>
  <div class="grid w-16 place-content-center">
    <a href="/errand" class="link">
      <Marcle path={{ outline: "newspaper" }} />
    </a>
  </div>
</div>
