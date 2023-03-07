<script lang="ts">
  import Earth from "@svgs/earth.svelte";
  import ThreeWords from "@components/three-words.svelte";
</script>

<section class="relative mb-16 grid w-full grid-cols-1 grid-rows-1">
  <!-- Map background -->
  <div
    id="earth-wrapper"
    class="relative left-[calc(-10rem+32vw)] -z-10 col-start-1 row-start-1 -my-[999px] 
    translate-y-[10%] place-self-center sm:left-[32vw]  
    lg:left-[25vw] xl:left-[calc(-10rem+35vw)]"
  >
    <Earth
      viewBox="225 0 1800 1680"
      class="w-[960px] transition-all duration-1000 md:w-[1100px] lg:w-[1250px] xl:w-[1350px]"
    />
  </div>
  <!-- Text -->
  <div
    class="col-start-1 row-start-1 mx-4 sm:mx-8 sm:my-6 sm:max-w-lg md:my-16 md:max-w-xl lg:mx-10 xl:mx-28 xl:my-28 xl:max-w-3xl"
  >
    <h1
      class="mt-14 font-display text-4xl font-medium uppercase text-blood-30 dark:text-gold-50 sm:text-5xl lg:text-6xl xl:text-7xl"
    >
      The home of English heritage
    </h1>
    <ThreeWords
      class="mt-6 mb-64 text-lg text-grey-20 sm:mb-8 md:text-xl lg:text-2xl"
    />
    <p class="my-10 px-2 xl:pr-48">
      Somewhere where one can go to learn about our heritage and to find others
      that share an interest. We work to connect those with a interest in
      learning and those with knowledge to share.
    </p>
    <div class="my-4 flex gap-4">
      <button class="">Latest work</button>
      <button class="other">Keep abreast</button>
    </div>
  </div>
</section>

<style lang="postcss">
  /* #earth-wrapper {
    margin-inline: min(calc(-40rem + 15vw), -3rem);
  } */
</style>
