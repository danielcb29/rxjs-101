import { initAccordion } from './accordion';
import { runHelloWorld } from './helloworld';
import { runMouseEvent } from './mouseEvent';
import { runApiExample } from './api';

initAccordion();
runHelloWorld();
runMouseEvent();
runApiExample();

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// // A stream
// var numbers$ = Rx.Observable
//   .interval(500)
//   .take(10)
//   .map(i => numbers[i]);

// numbers$.subscribe(n => {
//     let box = document.getElementById('2');
//     box.innerHTML = n;
//     console.log(n);
// });