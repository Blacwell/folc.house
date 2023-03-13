<script lang="ts">
  import { modal } from "./stores/modal-manager";

  // export let click: () => void;
  export let href: string;
  export let text: string;
</script>

<a class="ui" on:click={modal.close} {href}>{text}</a>
