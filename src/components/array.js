import render from './../utils/render'; 
import Rx from "rxjs/Rx";

const ARRAY_ID = 'array'

const arrayTemplate = `
  <div class="example__title">
      RxJS from data structure event
  </div>
  <div class="example__content">
      <div class="code">                    
          <pre class="prettyprint lang-js">
              <code >
const pushArray$ = new Rx.Subject();
const namesList = [];
pushArray$
  .switchMap((names) => Rx.Observable.from(names).last())
  .subscribe(lastNameAdded => {
    const li = document.createElement("li");
    li.innerHTML = lastNameAdded;
    boxNames.appendChild(li);
  });

Rx.Observable.fromEvent(btnRegister, "click")
  .map(() => firstNameInput.value + lastNameInput.value)
  .do(() => {
    firstNameInput.value = "";
    lastNameInput.value = "";
  })
  .subscribe(fullName => {
    namesList.push(fullName);
    pushArray$.next(namesList);
  });
              </code>
          </pre>                 
      </div>
      <div class="interaction">
          <div class="w3-card-4 form">
              <p>      
                <label class="w3-text-brown"><b>First Name</b></label>
                <input class="w3-input w3-border w3-sand form__input" name="firstname" type="text" id="firstname"></p>
              <p>      
                <label class="w3-text-brown"><b>Last Name</b></label>
                <input class="w3-input w3-border w3-sand form__input" name="lastname" type="text" id="lastname"></p>
              <p>
              <div class="w3-center">
                  <button class="w3-btn w3-brown w3-round-large" id="btnregister">Register</button></p>
              </div>
              </p>
          </div>
          <div class="w3-container w3-block w3-purple w3-round-large w3-hover-pink w3-center form__resultheading"><p>Registerd Names</p></div>
          <ul class="w3-container w3-card w3-round-large form__resultbox" id="resultbox"></ul>
      </div>
  </div>
`;

const subscribeArray = () => {
  const btnRegister = document.getElementById("btnregister");
  const boxNames = document.getElementById("resultbox");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");  
  const pushArray$ = new Rx.Subject();
  const namesList = [];

  pushArray$
    .switchMap((names) => Rx.Observable.from(names).last())
    .subscribe(lastNameAdded => {
      const li = document.createElement("li");
      li.innerHTML = lastNameAdded;
      boxNames.appendChild(li);
    });

  Rx.Observable.fromEvent(btnRegister, "click")
    .map(() => `${firstNameInput.value} ${lastNameInput.value}`)
    .do(() => {
      firstNameInput.value = "";
      lastNameInput.value = "";
    })
    .subscribe(fullName => {
      namesList.push(fullName);
      pushArray$.next(namesList);
    });
};

const runArrayExample = () => {
  render(ARRAY_ID, arrayTemplate);
  subscribeArray();
}

export { runArrayExample };
