<script lang="ts">
  import type { MarcleQuery } from "@svgs/marcle-hoard";
  import marclePathHoard from "@svgs/marcle-hoard";

  let shapeRequest: MarcleQuery;
  export { shapeRequest as shape };

  let className = "w-6 aspect-square";
  export { className as class };

  const { set, shape } = shapeRequest;

  let viewBox = "0 0 24 24";
  let fill: "currentColor" | "none" = "none";
  let stroke: "currentColor" | "none" = "currentColor";
  let title = "";
  let paths: string | string[];

  switch (set) {
    case "brand":
      fill = "currentColor";
      stroke = "none";
      title = set;
      paths = marclePathHoard[set][shape];
      break;
    case "outline":
      title = set;
      paths = marclePathHoard[set][shape];
      break;
    case "small":
      title = set;
      viewBox = "0 0 20 20";
      paths = marclePathHoard[set][shape];
      break;
    case "solid":
      title = set;
      fill = "currentColor";
      stroke = "none";
      paths = marclePathHoard[set][shape];
      break;
  }

  paths = Array.isArray(paths) ? paths : new Array(paths);
  const formattedTitle = title.replace(/([A-Z])/g, " $1");
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {fill}
  stroke-width="1.5"
  {stroke}
  {viewBox}
  class={className}
>
  <title>{formattedTitle}</title>
  {#each paths as d}
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      fill-rule="evenodd"
      clip-rule="evenodd"
      {d}
    />
  {/each}
</svg>
