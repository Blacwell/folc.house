<script lang="ts">
  import Brandmarc from "@svgs/brandmarc.svelte";
  import Pattern from "@svgs/ridge-pattern.svelte";
  import { modal } from "@components/stores/modalManager";
  import Cover from "@components/modals/cover.svelte";
  import MarcleItems from "./deals/marcle-items.svelte";
  import Marcle from "@components/marcle.svelte";

  enum Breakpoint {
    Sm = 460,
    Md = 768,
    Lg = 1024,
    Xl = 1280,
    Xxl = 1536,
  }

  let isWide = false;

  function checkIfWide() {
    const documentWidth = document.documentElement.clientWidth;
    isWide = documentWidth >= Breakpoint.Lg ? true : false;
  }

  checkIfWide();
</script>

<svelte:window on:resize={checkIfWide} />
<!-- Side ridge -->
{#if isWide}
  <div
    id="ridge"
    class="andwork-cloth | fixed inset-y-0 z-50 w-52 bg-gradient-to-tl from-blood-10 to-blood-20 pr-2 shadow-xl"
  >
    <div
      class="grid h-full w-full grid-rows-ridge border-r-2 border-ream-90 text-gold-40"
    >
      <!-- Name -->
      <div
        class="relative z-10 flex items-center justify-center overflow-hidden border-b-2 border-ream-80"
      >
        <Pattern class="absolute -bottom-1 fill-blood-5/60" />
        <a href="/" class="no-underline">
          <div class="relative h-fit w-fit bg-blood-20 p-1">
            <h1
              class="h-fit w-fit border-2 border-gold-40 px-2 pt-1.5 pb-0.5 
          font-display text-xl font-semibold uppercase "
            >
              Folchouse
            </h1>
          </div>
        </a>
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
          <MarcleItems />
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
{:else}
  <!--  Mobile  -->
  <button
    on:click={() => modal.set("cover")}
    class="fixed bottom-2 right-4 z-50 grid h-12 w-12 place-content-center rounded-sm bg-blood-30 shadow"
  >
    <Marcle path={{ outline: "bars3" }} />
  </button>
  <Cover />
{/if}

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
</style>
