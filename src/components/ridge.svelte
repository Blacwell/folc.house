<script lang="ts">
  import Brandmarc from "./svgs/brandmarc.svelte";
  import Github from "./svgs/icons/github.svelte";
  import Youtube from "./svgs/icons/youtube.svelte";
  import Twitter from "./svgs/icons/twitter.svelte";
  import Pattern from "./svgs/ridge-pattern.svelte";
</script>

<div
  id="ridge"
  class="relative bg-gradient-to-tl from-blood-10 to-blood-20 pr-2 shadow-xl"
>
  <div
    class="grid h-full w-full grid-rows-ridge border-r-2 border-ream-90 text-gold-40"
  >
    <!-- Name -->
    <div
      class="relative z-10 flex items-center justify-center overflow-hidden border-b-2 border-ream-80"
    >
      <Pattern class="absolute -bottom-1 fill-blood-5/60" />
      <div class="relative h-fit w-fit bg-blood-20 p-1">
        <h1
          class="h-fit w-fit border-2 border-gold-40 px-2 pt-1.5 pb-0.5 
          font-display text-xl font-semibold uppercase "
        >
          Folchouse
        </h1>
      </div>
    </div>
    <!-- Steerer -->
    <div class="grid h-full w-full overflow-y-hidden">
      <nav class="place-self-center">
        <ul
          class="steerer | relative space-y-14 text-center font-display text-lg font-semibold uppercase"
        >
          <li><a class="_underline" href="/about">About</a></li>
          <li><a class="_underline" href="/work">Work</a></li>
          <li><a class="_underline" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <!-- Marcles -->
    <div class="z-10 place-self-center ">
      <slot />
      <div
        class=" flex w-fit justify-center gap-4 border-y-4 border-blood-10 py-4 px-6"
      >
        <a href=""><Youtube class="marcle-on-dark h-5 w-5" /></a>
        <a href=""><Twitter class="marcle-on-dark h-5 w-5" /></a>
        <a href=""><Github class="marcle-on-dark h-5 w-5" /></a>
      </div>
    </div>
    <!-- Bottom -->
    <div class="">
      <a
        href="/"
        class="flex flex-col items-center justify-center gap-2 font-display no-underline"
      >
        <Brandmarc class="w-20 fill-gold-40" />
        <p class="text-center font-semibold uppercase leading-5">
          England<br />
          2023
        </p>
      </a>
    </div>
  </div>
</div>

<style lang="postcss">
  .steerer > li {
    @apply relative;
  }
  .steerer > li::before,
  .steerer > li:last-child:after {
    content: "";
    @apply absolute left-1/2 z-0 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm bg-gold-40;
  }
  .steerer > li::before {
    content: "";
    @apply -top-10;
  }
  .steerer > li:last-child::after {
    @apply -bottom-9;
  }
  #ridge {
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(351, 87%, 15%, 1)'/><path d='M20-5V5m0 30v10m20-30v10M0 15v10'  stroke-linecap='square' stroke-width='14.5' stroke='hsla(343, 90%, 20%, 1)' fill='none'/><path d='M-5 40H5M-5 0H5m30 0h10M35 40h10M15 20h10'  stroke-linecap='square' stroke-width='14.5' stroke='hsla(343, 98%, 20%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }
</style>
