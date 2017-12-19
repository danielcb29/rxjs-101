import Rx from 'rxjs/Rx';

const initAccordion = () => {
    const accordionHeader = document.getElementsByClassName('example-title');
    const headerClick = Rx.Observable.fromEvent(accordionHeader, 'click');
    headerClick
    .map(event => event.target)
    .do(target => target.classList.toggle('active'))
    .map(target => target.nextElementSibling)
    .subscribe(contentTarget => {
        contentTarget.style.display = 'flex';
    });

};

export {
    initAccordion
} 