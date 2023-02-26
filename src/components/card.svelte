<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import Image from "./image.svelte";
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

<article class="mx-4 mt-8 mb-14 max-w-5xl">
  <div class="my-4 text-center font-medium">
    <p>{formattedDate}</p>
    <p>{`By ${author}`}</p>
  </div>
  <section
    class=" relative  flex flex-col gap-4 rounded bg-ream-95/90 p-4 shadow transition-all duration-200 hover:bg-ream-95 hover:shadow-lg sm:flex-row"
  >
    <!-- <a {href} class="absolute inset-0 text-transparent no-underline"
      ><span class="sr-only">Open article</span></a
    > -->
    <p
      class="text-center font-display text-lg font-semibold uppercase text-grey-20 "
    >
      <a
        href={`/category/${urlise(category)}`}
        class="relative z-10 no-underline"
      >
        {category}</a
      >
    </p>
    <!-- Image -->
    {#if src}
      <a {href} class="no-underline">
        <div class="z-10 grid basis-2/3 content-center ">
          <Image {src} {alt} />
        </div>
      </a>
    {/if}
    <!-- Title -->
    <a {href} class="no-underline">
      <h1 class="text-3xl font-semibold">{article.data.title}</h1>
      <!-- Lead -->
      <p>{article.data.lead}</p>
    </a>
    <!-- Tags -->
    {#if tags}
      <ul class="relative space-x-1 py-2">
        {#each tags as tag}
          <a href={`/tags/${urlise(tag)}`} class="z-10 no-underline">
            <li
              class="inline-block rounded bg-blood-30 px-2 py-1 text-xs capitalize text-grey-90 hover:bg-blood-40"
            >
              {tag}
            </li>
          </a>
        {/each}
      </ul>
    {/if}
  </section>
</article>
