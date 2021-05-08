function greeter(person: string) {
  return "hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);