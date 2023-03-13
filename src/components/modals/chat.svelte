<script lang="ts">
  import Marcle from "@components/marcle.svelte";
  import ModalBase from "@components/modals/modal-base.svelte";
</script>

<ModalBase id="modal-chat">
  <div class="relative flex flex-col ">
    <article>
      <h1 class="mb-6 text-center font-display text-2xl">Conversation Space</h1>
      <div class="flex items-center gap-6">
        <div
          class="grid aspect-square w-16 flex-none place-items-center rounded-full bg-grey-90 text-grey-5 "
        >
          <Marcle
            shape={{ set: "brand", shape: "element" }}
            class="aspect-square w-10 fill-[#0DBD8B]"
          />
        </div>
        <p class="block">
          A live conversation space (think <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com">Discord</a
          >).
        </p>
      </div>
    </article>
    <div class="my-16 flex items-center gap-4">
      <hr class="w-full border-[1.5px]" />
      <p>or</p>
      <hr class="w-full border-[1.5px]" />
    </div>
    <article class="mb-14">
      <h1 class="mb-6 text-center font-display text-2xl">Email</h1>
      <div class="flex items-center gap-6">
        <div
          class="grid aspect-square w-16 flex-none place-items-center rounded-full bg-grey-90 text-grey-5 "
        >
          <Marcle
            shape={{ set: "solid", shape: "envelope" }}
            class="aspect-square w-10 fill-red"
          />
        </div>
        <p class="block">
          <a href="mailto:hail@folc.house">hail@folc.house</a>
          <a href="mailto:business@folc.house">business@folc.house</a>
        </p>
      </div>
    </article>
  </div>
</ModalBase>
