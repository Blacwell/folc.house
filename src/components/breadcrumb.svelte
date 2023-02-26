<script lang="ts">
  import Marcle from "@components/marcle.svelte";

  export let crumbs: { name: string; href: string }[];
</script>

<nav class="my-4 text-sm font-medium">
  <ol class="flex">
    <li>
      <a href="/"><Marcle class="h-5 w-5" path={{ outline: "home" }} /></a>
      <Marcle class="h-5 w-5" path={{ outline: "chevronRight" }} />
    </li>
    {#each crumbs as crumb}
      <li class="uppercase">
        <a href={crumb.href}>{crumb.name}</a>
        <Marcle class="h-5 w-5" path={{ outline: "chevronRight" }} />
      </li>
    {/each}
  </ol>
</nav>

<style lang="postcss">
  li {
    @apply flex;
  }
</style>
