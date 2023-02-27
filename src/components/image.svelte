<script lang="ts">
  type Ratio = "foolscap" | "square" | "video";
  type Fit = "contain" | "cover" | "fill" | "none" | "scale-down";

  export let src: string;
  export let alt: string = src.toLocaleLowerCase().replace(/-/g, " ");
  export let caption: string | undefined = undefined;
  export let ratio: Ratio = "foolscap";
  export let fit: Fit = "cover";
  export let position = "center";
  let className: string = "";
  export { className as class };

  const webp = src.replace(/\.[^/.]+$/, ".webp");
</script>

<figure class="">
  <picture class="aspect-{ratio} overflow-hidden rounded-sm {className}">
    <source srcset={webp} type="image/webp" />
    <img {src} {alt} class="object-{fit} object-{position}" />
  </picture>
  {#if caption}
    <figcaption
      class="mt-2 border-b-2 border-grey-30 pb-1 text-sm italic text-grey-30"
    >
      {caption}
    </figcaption>
  {/if}
</figure>
