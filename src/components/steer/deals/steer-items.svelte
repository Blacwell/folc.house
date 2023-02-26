<script lang="ts">
  const steerItems = [
    { text: "About", href: "/about" },
    { text: "Work", href: "/work" },
    { text: "Contact", href: "/contact" },
  ];
</script>

<ul
  class=" relative my-16  space-y-14 text-center font-display text-lg font-semibold uppercase"
>
  {#each steerItems as item}
    <li class="relative">
      <a class="text-2xl" href={item.href}>
        <div
          class="relative mx-auto h-fit w-fit bg-blood-20 p-1 px-3 pt-1.5 pb-0.5"
        >
          {item.text}
        </div>
      </a>
    </li>
  {/each}
</ul>

<style lang="postcss">
  li::before,
  li:last-child:after {
    content: "";
    @apply absolute left-1/2 z-0 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm bg-gold-40;
  }
  li::before {
    content: "";
    @apply -top-10;
  }
  li:last-child::after {
    @apply -bottom-9;
  }
</style>
