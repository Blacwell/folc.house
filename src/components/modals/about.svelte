<script lang="ts">
  import AnchorSlide from "@components/anchor-slide.svelte";
  import ModalBase from "@components/modals/modal-base.svelte";
  import { modal } from "@components/stores/modal-manager";
  import type { MarkdownHeading } from "astro";
  import { children, text } from "svelte/internal";
  import HeadingListLayer from "./about/heading-list-layer.svelte";

  export let data: AboutData;
  const { category, author, tags, date, headings } = data;

  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let formerTop = -1;
  let formerMid = -1;

  type Heading = {
    depth: number;
    slug: string;
    text: string;
    children: Heading[];
  };

  const headingList: Heading[] = [];

  for (const heading of headings) {
    const childHead: Heading = {
      ...heading,
      children: [],
    };
    // === Top heading ===
    if (childHead.depth === 2) {
      formerTop++;
      formerMid = -1;

      headingList.push(childHead);

      // === Midsome Heading ===
    } else if (childHead.depth === 3) {
      formerMid++;

      const top = headingList[formerTop];
      top.children.push(childHead);

      // === Underheading ===
    } else if (childHead.depth === 4) {
      const top = headingList[formerTop];
      const mid = top.children[formerMid];
      mid.children.push(childHead);
    }
  }
</script>

<ModalBase id="modal-about">
  <div class="w-full text-left">
    <h2>Category</h2>
    <div class="box">
      <span>{category}</span>
    </div>

    <h2>Tags</h2>
    <ul class="flex w-fit flex-wrap gap-2">
      {#each tags as tag}
        <li class="box">{tag}</li>
      {/each}
    </ul>
    <h2>Author</h2>
    <p>{author}</p>

    <h2>Date Uttered</h2>
    <p>{formattedDate}</p>

    <h2>Headings</h2>
    <HeadingListLayer list={headingList} let:prop={listing}>
      <HeadingListLayer list={listing} let:prop={underlistling}>
        <HeadingListLayer list={underlistling} end={true} />
      </HeadingListLayer>
    </HeadingListLayer>
  </div>
</ModalBase>

<style lang="postcss">
  .box {
    @apply w-fit bg-red px-3 py-2 text-sm uppercase;
  }
  h2 {
    @apply mt-5 mb-1 font-display text-2xl font-semibold uppercase text-yellow;
  }
</style>
