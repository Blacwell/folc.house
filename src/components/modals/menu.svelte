<script lang="ts">
  import Brandmarc from "@svgs/brandmarc.svelte";
  import Pattern from "@svgs/berry-pattern.svelte";
  import { modal } from "@components/stores/modal-manager";
  import ModalBase from "@components/modals/modal-base.svelte";
  import socials from "@ts/socials";
  import Marcle from "@components/marcle.svelte";

  type Links = {
    label: string;
    href: string;
  }[];
  const links: Links = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/contact" },
  ];

  const marcleLinks = [
    { marcle: socials.youtube.marcle, href: socials.youtube.url },
    { marcle: socials.twitter.marcle, href: socials.twitter.url },
    { marcle: socials.matrix.marcle, href: socials.matrix.url },
    { marcle: socials.instagram.marcle, href: socials.instagram.url },
    { marcle: socials.github.marcle, href: socials.github.url },
  ];
</script>

<ModalBase id="modal-menu">
  <!-- <Pattern class="absolute z-0 mx-12 " /> -->
  <div class="relative z-10 grid h-full w-full place-items-center">
    <ul class="space-y-8 text-center font-display text-2xl">
      {#each links as link}
        <li><a href={link.href}>{link.label}</a></li>
      {/each}
    </ul>
    <ul class="grid grid-cols-3 gap-8">
      {#each marcleLinks as link}
        <li>
          <a
            class="hover:fill-yellow hover:text-yellow active:fill-yellow active:text-yellow"
            href={link.href}><Marcle shape={link.marcle} /></a
          >
        </li>
      {/each}
    </ul>
  </div>
</ModalBase>

<style>
</style>
