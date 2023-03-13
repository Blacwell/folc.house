<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import Image from "./image.svelte";
  import Marcle from "./marcle.svelte";

  export let article: CollectionEntry<"articles">;

  const src = article.data.image?.src;
  const alt = article.data.image?.alt;
  const tags = article.data.tags;
  const date = article.data.publishDate;
  const title = article.data.title;
  const lead = article.data.lead;

  const formattedDate = date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const author = article.data.author;
  const href = `${article.collection}/${article.slug}`;
  const category = article.data.category;
  function urlise(unformattedString: string) {
    return unformattedString.toLocaleLowerCase().replace(/\s+/g, "-");
  }
</script>

<article
  class="bg-ream-95 relative w-full overflow-hidden p-2
  shadow transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
>
  <div class="border-yellow-50 flex h-full flex-col border-2 p-4">
    <div>
      {#if src}
        <a {href}>
          <Image {src} {alt} class="-mx-2 -mt-2 aspect-foolscap-wide" />
        </a>
      {/if}
    </div>
    <div class="h-full overflow-y-hidden">
      <h1
        class="mt-3 mb-1 font-display text-2xl font-bold uppercase leading-[1.2]"
      >
        {title}
      </h1>
      <p class="lead">{lead}</p>
    </div>
    {#if tags}
      <ul class="mt-2 flex flex-wrap gap-2">
        {#each tags as tag}
          <li class="rounded-sm bg-grey-30 px-2 py-1 text-sm text-grey-90">
            {tag}
          </li>
        {/each}
      </ul>
    {/if}
    <div>
      <hr class="my-2 text-grey-30" />
      <p>{formattedDate}</p>
      <p>{`By ${author}`}</p>
    </div>
  </div>
</article>

<style lang="postcss">
  /* .lead {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  } */
</style>
