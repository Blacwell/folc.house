<script lang="ts">
  import socials from "@ts/socials";
  import Marcle from "@components/marcle.svelte";

  const marcleItems = [
    { marcle: socials.youtube.marcle, href: socials.youtube.url },
    { marcle: socials.twitter.marcle, href: socials.twitter.url },
    { marcle: socials.github.marcle, href: socials.github.url },
  ];

  let className = "";
  export { className as class };
</script>

<ul
  class="border-red-10 mx-2 flex flex-wrap justify-center gap-4 border-y-4 py-4 px-2 {className}"
>
  {#each marcleItems as item}
    <li>
      <a href={item.href}>
        <Marcle shape={item.marcle} />
      </a>
    </li>
  {/each}
</ul>
