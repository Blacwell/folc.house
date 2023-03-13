<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import Image from "./image.svelte";
  import Marcle from "./marcle.svelte";
  export let article: CollectionEntry<"articles">;
  const src = article.data.image?.src;
  const alt = article.data.image?.alt;
  const tags = article.data.tags;
  const date = article.data.publishDate;
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

<article class="mx-4 mt-8 mb-14 max-w-md md:max-w-5xl">
  <div class="my-4 text-center font-medium">
    <p>{formattedDate}</p>
    <p>{`By ${author}`}</p>
  </div>
  <section
    class="grid-cols-card bg-ream-95/90 hover:bg-ream-95 relative grid grid-rows-card rounded py-4 px-2 shadow transition-all 
    duration-200 hover:shadow-lg sm:p-4 md:flex-row "
  >
    <div class="col-span-2 md:col-start-2 md:col-end-4 md:flex md:items-center">
      <p
        class="top-after -mb-[0.5em] text-center font-display text-lg font-semibold uppercase text-grey-20"
      >
        <a
          href={`/category/${urlise(category)}`}
          class="relative z-10 no-underline"
        >
          <span class=" inline-block align-middle">
            {category}
          </span>
        </a>
      </p>
      <!-- Tags -->
      {#if tags}
        <ul class="relative my-2 space-x-1">
          {#each tags as tag}
            <a href={`/tags/${urlise(tag)}`} class="z-10 no-underline">
              <li
                class="hover:bg-red-40 inline-block rounded bg-red-dark px-2 py-1 text-xs font-semibold uppercase text-grey-90"
              >
                {tag}
              </li>
            </a>
          {/each}
        </ul>
      {/if}
    </div>
    <!-- Image -->
    {#if src}
      <div
        class="z-10 col-span-2 my-3 grid basis-2/3 content-center 
        md:col-start-1 md:col-end-2 md:row-span-3 md:row-start-1 md:my-0 md:mr-4"
      >
        <a {href} class="no-underline">
          <Image ratio="foolscap-wide" {src} {alt} />
        </a>
      </div>
    {/if}
    <div class="col-span-2 md:col-start-2 md:row-span-2">
      <!-- Title -->
      <a {href} class="mb-4 no-underline">
        <h1 class="mb-3 text-3xl font-semibold">{article.data.title}</h1>
        <!-- Lead -->
        <p>{article.data.lead}</p>
      </a>
    </div>
  </section>
</article>

<style lang="postcss">
  .top-before::before,
  .top-after::after {
    @apply mx-3 mb-[0.25em] inline-block h-[.625em] w-[0.625em] bg-yellow align-middle content-[""];
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000' viewBox='0 0 24 24'%0A%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' fill-rule='evenodd' clip-rule='evenodd' d='m 20.485281,9.8786797 a 3,3 0 0 1 1e-6,4.2426403 l -6.363962,6.363961 a 3,3 0 0 1 -4.2426403,0 L 3.5147185,14.12132 a 3,3 0 0 1 2e-7,-4.2426403 L 9.8786798,3.5147185 a 3,3 0 0 1 4.2426402,1e-7 z'/%3E%3C/svg%3E%0A");
    mask-repeat: no-repeat;
    mask-size: contain;
  }
</style>
