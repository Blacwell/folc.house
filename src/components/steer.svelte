<script lang="ts">
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Marcle from "./marcle.svelte";
  import Menu from "./modals/menu.svelte";
  import { modal } from "./stores/modal-manager";

  enum Breakpoint {
    Sm = 460,
    Md = 768,
    Lg = 1024,
    Xl = 1280,
    Xxl = 1536,
  }
  export let options: steerOption[];

  const steerOptionDefault: steerOption = {
    label: "Menu",
    marcle: { set: "outline", shape: "bars3" },
    action: { modal: "menu" },
  };

  const localSteerOptions: steerOption[] = [steerOptionDefault, ...options];

  const documentWidth = writable(document.documentElement.clientWidth);
  const showSteerBar = writable(true);

  let lastScrollPosition = 0;
  let savedScrollPosition = window.screenY;
  let isFormerScrollDown: boolean;

  function onScroll() {
    const currentScrollPosition = window.scrollY;

    if (
      lastScrollPosition > currentScrollPosition ||
      currentScrollPosition <= 40 ||
      $modal !== null
    ) {
      setSteerBar(false, currentScrollPosition);
    } else {
      setSteerBar(true, currentScrollPosition);
    }

    lastScrollPosition = currentScrollPosition;
  }

  function setSteerBar(isScrollDown: boolean, currentScroll: number) {
    const threshold = 30;

    if (isFormerScrollDown === !isScrollDown) {
      savedScrollPosition = currentScroll;
    }

    isFormerScrollDown = isScrollDown;

    if (Math.abs(savedScrollPosition - currentScroll) >= threshold) {
      showSteerBar.set(!isScrollDown);
    }
  }
</script>

<svelte:window
  on:resize={() => ($documentWidth = document.documentElement.clientWidth)}
  on:scroll={onScroll}
/>

{#if $documentWidth >= Breakpoint.Lg}
  <!-- Desktop -->
{:else if $showSteerBar}
  <!-- Mobile -->
  <div
    transition:slide={{
      delay: 0,
      duration: 400,
      easing: cubicInOut,
    }}
    class="fixed inset-x-0 bottom-0 z-50 h-14 bg-grey-15 text-grey-95 shadow"
  >
    <nav class="h-full">
      <ul class="flex h-full flex-row-reverse px-6">
        {#each localSteerOptions as option}
          <li class=" h-full w-1/4 overflow-hidden text-center">
            {#if "modal" in option.action}
              <button
                id="modal-button-{option.action.modal}"
                on:click={() => {
                  if ("modal" in option.action) modal.set(option.action.modal);
                }}
                class="flex h-full w-full flex-col justify-center gap-0.5

               hover:fill-yellow hover:text-yellow active:fill-yellow active:text-yellow"
              >
                <Marcle
                  shape={option.marcle}
                  class="mx-auto mt-0.5 h-6 w-6"
                /><span class="block text-xs uppercase">{option.label}</span>
              </button>
            {:else}
              <a
                href={option.action.href}
                class="flex h-full w-full flex-col justify-center gap-0.5 no-underline
                  hover:fill-yellow hover:text-yellow active:fill-yellow active:text-yellow"
              >
                <Marcle
                  shape={option.marcle}
                  class="mx-auto mt-0.5 h-6 w-6"
                /><span class="block text-xs uppercase">{option.label}</span>
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <Menu />
  <slot />
{/if}

<style lang="postcss">
</style>
