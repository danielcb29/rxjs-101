import render from './../utils/render'; 

import Rx from "rxjs/Rx";

const ACCORDION_ID = 'accordion';
const ACTIVE_CLASS = 'active';

const accordionTemplate = `
  <div class="example__title">
    RxJS from ... any implementation
  </div>
  <div class="example__content">
    <div class="code">
        <pre class="prettyprint lang-js">
            <code >
const accordionHeader = document.querySelectorAll(".example__title");
const accordionObservable = Rx.Observable.fromEvent(accordionHeader, "click");
accordionObservable
  .map(({ target }) => {
    const isActive = target.classList.contains(ACTIVE_CLASS);
    const display = isActive ? "none" : "flex";
    return {
      isActive: isActive,
      target,
      display
    };
  })
  .do(({ target, isActive }) => {
    if (isActive) {
      target.classList.remove(ACTIVE_CLASS);
    } else {
      target.classList.toggle(ACTIVE_CLASS);
    }
  })
  .do(
    targetOptions =>
      (targetOptions.target = targetOptions.target.nextElementSibling)
  )
  .subscribe(({ target, display }) => {
    target.style.display = display;
  });
            </code>
        </pre>                 
    </div>
    <div class="interaction">
        <h3>This Accordion was implemented using RxJS!! :D</h3>
        <p>This accordion uses RxJS to handle click envents and show or dismiss content blocks</p>
        <ol>
            <li class="result"><span class="result__title">Catch event</span></li>
            <li class="result"><span class="result__title">Define if is currently active or not</span></li>
            <li class="result"><span class="result__title">Change element class</span></li>
            <li class="result"><span class="result__title">Get next element (content)</span></li>
            <li class="result"><span class="result__title">Change display property of the event</span></li>
        </ol>
    </div>
  </div>
`;

const subscribeAccordion = () => {
  const accordionHeader = document.querySelectorAll(".example__title");
  const accordionObservable = Rx.Observable.fromEvent(accordionHeader, "click");
  accordionObservable
    .map(({ target }) => {
      const isActive = target.classList.contains(ACTIVE_CLASS);
      const display = isActive ? "none" : "flex";
      return {
        isActive: isActive,
        target,
        display
      };
    })
    .do(({ target, isActive }) => {
      if (isActive) {
        target.classList.remove(ACTIVE_CLASS);
      } else {
        target.classList.toggle(ACTIVE_CLASS);
      }
    })
    .do(
      targetOptions =>
        (targetOptions.target = targetOptions.target.nextElementSibling)
    )
    .subscribe(({ target, display }) => {
      target.style.display = display;
    });
};

const initAccordion = () => {
  render(ACCORDION_ID, accordionTemplate);
  subscribeAccordion();
}

export { initAccordion };
