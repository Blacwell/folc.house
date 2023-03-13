<script lang="ts">
  import AnchorSlide from "@components/anchor-slide.svelte";

  type Heading = {
    depth: number;
    slug: string;
    text: string;
    children: Heading[];
  };
  export let list: Heading[];
  export let end = false;
</script>

<ol>
  {#each list as listling}
    <li>
      <AnchorSlide href={`#${listling.slug}`} text={listling.text} />
      {#if !end && listling.children.length > 0}
        <slot prop={listling.children} />
      {/if}
    </li>
  {/each}
</ol>

<style lang="postcss">
  ol {
    @apply list-inside list-[square];
  }
  li {
    @apply my-1 uppercase;
  }
</style>
