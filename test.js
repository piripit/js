const person = {
  firstName: "",
  lastName: "",
  language: "",
  set lang(lang) {
    if (this.lastName === "") {
      this.lastName = lang;
    } else {
      this.firstName = lang;
    }
  },
};
person.lang = "momo";
person.lang = "kiki";
console.log(person.lastName);
console.log(person.firstName);
