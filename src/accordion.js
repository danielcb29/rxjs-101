import Rx from "rxjs/Rx";

const initAccordion = () => {
  const accordionHeader = document.getElementsByClassName("example-title");
  const accordionObservable = Rx.Observable.fromEvent(accordionHeader, "click");
  accordionObservable
    .map(event => event.target)
    .map(target => {
      const isActive = target.classList.contains("active");
      const display = isActive ? "none" : "flex";
      return {
        isActive: isActive,
        target: target,
        display: display
      };
    })
    .do(({ target, isActive }) => {
      if (isActive) {
        target.classList.remove("active");
      } else {
        target.classList.toggle("active");
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
