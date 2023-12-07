// `openedItem` n'est pas un boolean mais plutôt un id (string) qui va définir quel item est ouvert
export const discriminatedToggle = () => ({
  openedItem: null as string | null,
  isOpen(item: string) {
    return this.openedItem === item;
  },
  openItem(item: string) {
    this.openedItem = item;
  },
  toggleItem(item: string) {
    this.openedItem = this.isOpen(item) ? null : item;
  },
});
