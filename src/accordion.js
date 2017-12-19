import Rx from "rxjs/Rx";

const initAccordion = () => {
  const accordionHeader = document.getElementsByClassName('example-title');
  const headerClick = Rx.Observable.fromEvent(accordionHeader, 'click');
  headerClick
	.map(event => event.target)
	.map(target => {
		const active = target.classList.contains('active');
		const display = active ? 'none' : 'flex';
		return {
			active: active, 
			target: target,
			display: display
		};
	})
    .do(({ target, active }) => {
		if (active) {
			target.classList.remove('active')
		} else {
			target.classList.toggle('active')
		}
	})
	.do(targetOptions => targetOptions.target = targetOptions.target.nextElementSibling)
    .subscribe(({ target, display }) => {
      target.style.display = display;
    });
};

export { initAccordion };
