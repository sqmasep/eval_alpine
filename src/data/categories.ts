export const CATEGORIES = [
  {
    name: "NextJS",
    backgroundColor: "#000000",
    color: "#fff",
    id: "nextjs",
  },
  {
    name: "React",
    backgroundColor: "#61dafb",
    color: "#000",
    id: "react",
  },
  {
    name: "Typescript",
    backgroundColor: "#007acc",
    color: "#fff",
    id: "typescript",
  },
  {
    name: "OCaml",
    backgroundColor: "#EC6813",
    color: "#fff",
    id: "ocaml",
  },
  {
    name: "HTMX",
    backgroundColor: "#FF5F00",
    color: "#fff",
    id: "htmx",
  },
  {
    name: "PugJS",
    backgroundColor: "#A86454",
    color: "#fff",
    id: "pugjs",
  },
  {
    name: "Express",
    backgroundColor: "#000000",
    color: "#fff",
    id: "express",
  },
] as const satisfies readonly {
  name: string;
  backgroundColor: string;
  color: string;
  id: string;
}[];

export type Category = (typeof CATEGORIES)[number];
