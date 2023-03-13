<script lang="ts">
  import Sun from "./svgs/icons/sun.svelte";
  import Moon from "./svgs/icons/moon.svelte";
  import { dyewise } from "./stores/dyewise";

  const root = document.documentElement;
  let handle: HTMLElement;

  $: {
    if (handle) {
      switch ($dyewise) {
        case "dark":
          handle.style.left = "100%";
          break;
        case "light":
          handle.style.left = "0%";
          break;
        case "system":
          handle.style.left = "50%";
          break;
        default:
          console.error("Invalid dyewise option on handle");
          break;
      }
    }
    // switch ($dyewise) {
    //   case "light":
    //     root.classList.add("dark");
    //     handle.style.left = "100%";
    //     break;
    //   case "dark":
    //     localStorage.dyewise = "system";
    //     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    //       root.classList.add("dark");
    //     } else {
    //       root.classList.remove("dark");
    //     }
    //     handle.style.left = "0%";
    //     break;
    //   default:
    //     root.classList.remove("dark");
    //     handle.style.left = "50%";
    //     break;
    // }
  }
</script>

<div class="group my-2 flex items-center justify-center">
  <Sun
    class="w-4 fill-grey-60 transition-all duration-300 ease-in-out group-hover:fill-grey-50"
  />
  <button on:click={dyewise.next} type="button" class="relative mx-3 w-16">
    <div
      bind:this={handle}
      class="group-hover:drop-shadow2xl absolute left-1/2 top-1/2 -m-2 h-4 w-4 rounded-full
           bg-grey-80 transition-all duration-300 ease-in-out group-hover:bg-grey-80"
    />
    <div
      class="duration-400 group-hover:bg-red-60 my-2 h-1 w-full rounded-full bg-grey-80 transition ease-in-out"
    />
  </button>
  <Moon
    class="h-4 w-4 fill-grey-60 transition-all duration-300 ease-in-out group-hover:fill-grey-50"
  />
</div>

<style>
</style>
