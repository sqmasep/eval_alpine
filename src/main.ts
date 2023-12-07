import { discriminatedToggle } from "./components/discriminatedToggle";
import { filter } from "./components/filter";
import { toggle } from "./components/toggle";
import { CategoriesService } from "./services/CategoriesService";
import { ProjectsService } from "./services/ProjectsService";
import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

window.addEventListener("DOMContentLoaded", () => {
  Alpine.data("ProjectsService", ProjectsService);
  Alpine.data("CategoriesService", CategoriesService);
  Alpine.data("filter", filter);
  Alpine.data("toggle", toggle);
  Alpine.data("discriminatedToggle", discriminatedToggle);
  Alpine.start();
});
