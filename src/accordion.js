import Rx from "rxjs/Rx";

const ACTIVE_CLASS = 'active';

const initAccordion = () => {
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

export { initAccordion };
