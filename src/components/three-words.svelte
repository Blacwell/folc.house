<script lang="ts">
  let className = "";
  export { className as class };
</script>

<div class={className}>
  <p class="align-middle font-display font-medium uppercase">
    <span>History</span><span>Tradition</span><span>Culture</span>
  </p>
</div>

<style lang="postcss">
  span:not(:last-child)::after {
    @apply mx-1 mb-[0.25em] inline-block h-[.625em] w-[0.625em] bg-gold-40 align-middle content-[""];
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000' viewBox='0 0 24 24'%0A%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' fill-rule='evenodd' clip-rule='evenodd' d='m 20.485281,9.8786797 a 3,3 0 0 1 1e-6,4.2426403 l -6.363962,6.363961 a 3,3 0 0 1 -4.2426403,0 L 3.5147185,14.12132 a 3,3 0 0 1 2e-7,-4.2426403 L 9.8786798,3.5147185 a 3,3 0 0 1 4.2426402,1e-7 z'/%3E%3C/svg%3E%0A");
    mask-repeat: no-repeat;
    mask-size: contain;
  }
</style>
