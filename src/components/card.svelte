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
    class="relative grid grid-cols-card grid-rows-card rounded bg-ream-95/90 p-2 shadow transition-all duration-200 
    hover:bg-ream-95 hover:shadow-lg sm:p-4 md:flex-row "
  >
    <div class="col-span-2 md:col-start-2 md:col-end-4 md:flex md:items-center">
      <p
        class=" text-center font-display text-lg font-semibold uppercase text-grey-20"
      >
        <a
          href={`/category/${urlise(category)}`}
          class="relative z-10 no-underline"
        >
          <Marcle
            path={{ solid: "top" }}
            class="mx-3 -mt-1 inline-block h-[0.75em] w-[0.75em] fill-gold-40"
          />
          <span class="">
            {category}
          </span>
          <Marcle
            path={{ solid: "top" }}
            class="mx-3 -mt-1 inline-block h-[0.75em] w-[0.75em] fill-gold-40"
          />
        </a>
      </p>
      <!-- Tags -->
      {#if tags}
        <ul class="relative my-2 space-x-1">
          {#each tags as tag}
            <a href={`/tags/${urlise(tag)}`} class="z-10 no-underline">
              <li
                class="inline-block rounded bg-blood-30 px-2 py-1 text-xs font-semibold uppercase text-grey-90 hover:bg-blood-40"
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
        md:col-start-1 md:col-end-2 md:row-span-2 md:row-start-1 md:mr-4"
      >
        <a {href} class="no-underline">
          <Image {src} {alt} />
        </a>
      </div>
    {/if}
    <div class="col-span-2 md:col-start-2">
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
</style>
