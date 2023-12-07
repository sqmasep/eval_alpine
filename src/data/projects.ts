import { Category } from "./categories";

export const PROJECTS = [
  {
    name: "cloud-host",
    imageUrl: "https://rlsv-v4.leblondromain.repl.co/img/reals/cloud-host.png",
    categories: ["nextjs", "react", "typescript"],
  },
  {
    name: "Belt",
    imageUrl: "https://rlsv-v4.leblondromain.repl.co/img/reals/belt.png",
    categories: ["nextjs", "react", "typescript"],
  },
  {
    name: "Atom API Client",
    categories: ["htmx", "ocaml"],
  },

  {
    name: "RLSV v4",
    imageUrl: "https://rlsv-v4.leblondromain.repl.co/img/reals/rlsv-v4.png",
    categories: ["pugjs"],
  },
  {
    name: "console-kit",
    imageUrl: "",
    categories: ["typescript"],
  },
  {
    name: "SAE302",
    imageUrl: "",
    categories: ["express", "typescript", "react"],
  },
] as const satisfies readonly {
  name: string;
  imageUrl?: string;
  categories: readonly Category["id"][];
}[];

export type Project = (typeof PROJECTS)[number];
