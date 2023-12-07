export const FAQS = [
  {
    question: "Comment faire un robot qui détek les mouches",
    answer: "Il faut utiliser de l'uranium et du tungstène",
  },
  {
    question: "Pourquoi php est un désastre écologique?",
    answer:
      "Car il refresh la page à chaque fois c'est terrible et ya trop de plugins",
  },
  {
    question: "Quel est le meilleur hébergeur de la terre",
    answer:
      "C'est cloud-host évidemment, c'est pas cher en plus et ya des réducs",
  },
  {
    question: "Pourquoi Belt est le meilleur bot discord?",
    answer:
      "C'est le meilleur bot discord car son site est très stylé (j'ai fait le site)",
  },
] as const satisfies readonly {
  question: string;
  answer: string;
}[];
