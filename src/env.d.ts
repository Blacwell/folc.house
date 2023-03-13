/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type steerOption = {
  label: string;
  marcle: import("@svgs/marcle-hoard").MarcleQuery;
  action: { modal: Modal } | { href: string };
};

type Modal = "menu" | "about" | "seek" | "chat" | "share" | null;

type KeysOfUnion<T> = T extends T ? keyof T : never;

type AboutData = {
  category: string;
  tags: string[];
  author: string;
  date: Date;
  headings: import("astro").MarkdownHeading[];
};
