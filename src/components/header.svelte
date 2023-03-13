<script lang="ts">
  import Marcle from "@components/marcle.svelte";
</script>

<div
  class="bg-red-20 relative mb-6 flex h-16 w-full items-center justify-between px-4 text-yellow lg:hidden"
>
  <div class="w-16" />
  <div>
    <a href="/" class="link">
      <h1
        class="h-fit w-fit border-2 border-yellow px-2 pt-1.5 pb-0.5 font-display text-xl font-semibold uppercase"
      >
        Folchouse
      </h1>
    </a>
  </div>
  <div class="grid w-16 place-content-center">
    <a href="/errand" class="link">
      <Marcle shape={{ set: "outline", shape: "newspaper" }} />
    </a>
  </div>
</div>
