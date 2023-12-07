interface ContactFormError {
  name: string | null;
  email: string | null;
  message: string | null;
}

export const contactForm = () => ({
  name: "",
  email: "",
  message: "",

  errors: { email: null, message: null, name: null } as ContactFormError,

  submit() {
    this.errors = {
      email: null,
      message: null,
      name: null,
    };

    if (!this.name) {
      this.errors.name = "Veuillez saisir un nom";
    }

    if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.errors.email = "Veuillez saisir un email valide";
    }
    if (!this.email) this.errors.email = "Veuillez saisir un email";

    if (!this.message) {
      this.errors.message = "Veuillez saisir un message";
    }
  },
});
