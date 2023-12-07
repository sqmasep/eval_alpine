import { Category } from "./categories";

export const PROJECTS = [
  {
    name: "cloud-host",
    description:
      "Cloud-host est un hébergeur très haut débit créé par un très bon ami",
    imageUrl: "https://rlsv-v4.leblondromain.repl.co/img/reals/cloud-host.png",
    categories: ["nextjs", "react", "typescript"],
  },
  {
    name: "Belt",
    description:
      "Un bot discord gratuit pour tous, créé par Kawu, un très bon ami",
    imageUrl: "https://rlsv-v4.leblondromain.repl.co/img/reals/belt.png",
    categories: ["nextjs", "react", "typescript"],
  },
  {
    name: "Atom API Client",
    description:
      "C'est un client qui permet de consulter la liste des atomes, écrit en HTMX et en OCaml pour le serveur",
    categories: ["htmx", "ocaml"],
  },

  {
    name: "RLSV v4",
    description:
      "RLSV v4 est mon projet portfolio d'avril 2022, qui sera bientôt remplacé par la v5 😎",
    imageUrl: "https://rlsv-v4.leblondromain.repl.co/img/reals/rlsv-v4.png",
    categories: ["pugjs"],
  },
  {
    name: "console-kit",
    description:
      "Une librairie rédigée en typescript très strict qui vous aidera à logger de manière structurée dans vos serveurs",
    imageUrl: "",
    categories: ["typescript"],
  },
  {
    name: "SAE302",
    description:
      "Projet universitaire consistant à réaliser un court métrage ainsi qu'un site interactif lié à ce film",
    categories: ["express", "typescript", "react"],
  },
] as const satisfies readonly {
  name: string;
  description?: string;
  imageUrl?: string;
  categories: readonly Category["id"][];
}[];

export type Project = (typeof PROJECTS)[number];
