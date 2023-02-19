<script lang="ts">
  import type { CollectionEntry } from "astro:content";
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
</script>

<article class="mx-4 my-8 max-w-5xl">
  <div class="my-4 text-center font-medium">
    <p>{formattedDate}</p>
    <p>{`By ${author}`}</p>
  </div>
  <a {href} class="no-underline ">
    <div class="flex gap-4 rounded bg-white/80 p-4 shadow-lg hover:bg-white">
      {#if src}
        <div class="grid basis-2/3 content-center">
          <!-- 26 x 16 -->
          <div class="aspect-foolscap overflow-hidden">
            <img {src} {alt} />
          </div>
        </div>
      {/if}
      <div class=" basis-full">
        <div class="flex">
          <p class="text-sm font-semibold uppercase">{article.data.category}</p>
          {#if tags}
            <ul class="flex gap-2">
              {#each tags as tag}
                <li class="rounded-sm bg-grey-90 px-2 py-1 text-xs capitalize">
                  {tag}
                </li>
              {/each}
            </ul>
          {/if}
        </div>
        <h1 class="text-4xl font-semibold">{article.data.title}</h1>
        <p>{article.data.lead}</p>
      </div>
    </div>
  </a>
</article>
