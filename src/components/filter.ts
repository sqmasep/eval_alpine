import { Project } from "../data/projects";
import type { Category } from "../data/categories";

export const filter = (array: Project[]) => ({
  array,
  activeFilters: [] as string[],
  filteredArray: array,

  resetFilters() {
    this.activeFilters = [];
    this.updateFilteredArray();
  },

  toggleFilter(categoryId: Category["id"]) {
    if (this.activeFilters.includes(categoryId)) {
      this.activeFilters = this.activeFilters.filter(
        (filter) => filter !== categoryId,
      );
    } else {
      this.activeFilters = [...this.activeFilters, categoryId];
    }
    this.updateFilteredArray();
  },

  isActive(categoryId: Category["id"]) {
    return this.activeFilters.includes(categoryId);
  },

  updateFilteredArray() {
    console.log(this.activeFilters.length);
    this.filteredArray =
      this.activeFilters.length === 0
        ? this.array
        : this.array.filter((project) =>
            project.categories.some((category) =>
              this.activeFilters.includes(category),
            ),
          );
  },
});
