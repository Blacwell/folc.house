<script lang="ts">
  import Image from "@components/image.svelte";
  import Breadcrumb from "@components/breadcrumb.svelte";

  export let title: string;
  export let src: string;
  export let alt: string;
  export let caption: string;
  export let lead: string;
</script>

<article class="mx-auto mt-8 max-w-prose px-4 text-lg lg:mt-16">
  <h1
    class="font-display text-4xl font-semibold uppercase text-grey-10 lg:text-6xl lg:text-grey-20"
  >
    {title}
  </h1>
  <Image ratio="foolscap-wide" class="mb-4" {src} {alt} {caption} />
  <p class="mb-6 font-semibold">{lead}</p>
  <section class="prose prose-lg dark:prose-invert prose-p:text-grey-10">
    <slot />
  </section>
</article>
