import Rx from "rxjs/Rx";

const runArrayExample = () => {
  const btnRegister = document.getElementById("register");
  const boxNames = document.getElementById("collection-box");
  const namesList = [];

  const namesObservable = Rx.Observable.from(namesList).last();

  const firstNameInput = document.getElementById("fn");
  const lastNameInput = document.getElementById("ln");

  Rx.Observable.fromEvent(btnRegister, "click")
    .map(event => `${firstNameInput.value} ${lastNameInput.value}`)
    .do(fullName => {
      firstNameInput.value = "";
      lastNameInput.value = "";
    })
    .subscribe(fullName => {
      namesList.push(fullName);

      namesObservable.subscribe(lastNameAdded => {
        const li = document.createElement("li");
        li.innerHTML = lastNameAdded;
        boxNames.appendChild(li);
      });
    });
};

export { runArrayExample };
