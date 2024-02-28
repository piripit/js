const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
      return this.lastName;
  }
};

// Affichage de la donnée 
document.getElementById("demo").innerHTML = person.lang;
console.log(person.lang);