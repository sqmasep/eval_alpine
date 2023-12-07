// toggle pour un item indépendant
export const toggle = (isDefaultOpen: boolean = false) => ({
  open: isDefaultOpen,
  toggleOpen() {
    this.open = !this.open;
  },
});
