import type { MarcleQuery } from "@svgs/marcle-hoard";

type Socials = {
  [key: string]: {
    marcle: MarcleQuery;
    url: string;
  };
};

const socials: Socials = {
  youtube: {
    marcle: { set: "brand", shape: "youtube" },
    url: "https://www.youtube.com/@FolcHouse",
  },
  odysee: {
    marcle: { set: "brand", shape: "odysee" },
    url: "",
  },

  matrix: {
    marcle: { set: "brand", shape: "matrix" },
    url: "",
  },

  reddit: {
    marcle: { set: "brand", shape: "reddit" },
    url: "",
  },

  instagram: {
    marcle: { set: "brand", shape: "instagram" },
    url: "",
  },
  twitter: {
    marcle: { set: "brand", shape: "twitter" },
    url: "https://twitter.com/FolcHouse",
  },
  github: {
    marcle: { set: "brand", shape: "github" },
    url: "https://github.com/Blacwell/folc.house",
  },
};

export default socials;
