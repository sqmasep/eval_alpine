// toggle pour un item indépendant
export const toggle = (isDefaultOpen: boolean = false) => ({
  isOpen: isDefaultOpen,
  toggleOpen() {
    this.isOpen = !this.isOpen;
  },
});
