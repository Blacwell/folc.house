import type { Brand } from "@icons/marcle-hoard";

type Socials = {
  [key: string]: {
    marcle: { brand: Brand };
    url: string;
  };
};

const socials: Socials = {
  youtube: {
    marcle: { brand: "youtube" },
    url: "https://www.youtube.com/@FolcHouse",
  },
  odysee: {
    marcle: { brand: "odysee" },
    url: "",
  },

  matrix: {
    marcle: { brand: "matrix" },
    url: "",
  },

  reddit: {
    marcle: { brand: "reddit" },
    url: "",
  },

  instagram: {
    marcle: { brand: "instagram" },
    url: "",
  },
  twitter: {
    marcle: { brand: "twitter" },
    url: "https://twitter.com/FolcHouse",
  },
  github: {
    marcle: { brand: "github" },
    url: "https://github.com/Blacwell/folc.house",
  },
};

export default socials;
