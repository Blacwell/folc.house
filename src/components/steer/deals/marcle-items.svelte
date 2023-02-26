<script lang="ts">
  import socials from "@ts/socials";
  import Marcle from "@components/marcle.svelte";

  const marcleItems = [
    { marcle: socials.youtube.marcle, href: socials.youtube.url },
    { marcle: socials.twitter.marcle, href: socials.twitter.url },
    { marcle: socials.github.marcle, href: socials.github.url },
  ];
</script>

<ul
  class="flex w-fit justify-center gap-4 border-y-4 border-blood-10 py-4 px-6"
>
  {#each marcleItems as item}
    <li>
      <a href={item.href}>
        <Marcle path={item.marcle} />
      </a>
    </li>
  {/each}
</ul>
