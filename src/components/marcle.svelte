<script lang="ts">
  import marcleHoard from "@icons/marcle-hoard";

  enum Set {
    Solid = "solid",
    Outline = "outline",
    Small = "small",
    Brand = "brand",
  }
  type Path = { [key in Set]?: keyof (typeof marcleHoard)[key] };

  export let path: Path;

  let d = marcleHoard.outline.exclamationTriangle;
  let viewBox = "0 0 24 24";
  let fill = "none";
  let stroke = "currentColor";

  if (Object.keys(path).length === 1) {
    if (Set.Solid in path) {
      d = marcleHoard.solid[path.solid ?? "exclamationTriangle"];
      fill = "currentColor";
      stroke = "none";
    } else if (Set.Outline in path) {
      d = marcleHoard.outline[path.outline ?? "exclamationTriangle"];
    } else if (Set.Small in path) {
      d = marcleHoard.small[path.small ?? "exclamationTriangle"];
      viewBox = "0 0 20 20";
    } else if (Set.Brand in path) {
      fill = "currentColor";
      stroke = "none";
      d = marcleHoard.brand[path.brand ?? "exclamationTriangle"];
    }
  }

  let className = "h-6 w-6";
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {fill}
  stroke-width="1.5"
  {stroke}
  {viewBox}
  class={className}
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    fill-rule="evenodd"
    clip-rule="evenodd"
    {d}
  />
</svg>
