import Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(observer => {
    observer.next('Hello World');
});

observable.subscribe(result => {
    let box = document.getElementById('1');
    box.innerHTML = result;
    console.log(result);
}); 

var numbers = [1,2,3,4,5,6,7,8,9,10];
// A stream
var numbers$ = Rx.Observable
  .interval(500)
  .take(10)
  .map(i => numbers[i]);

numbers$.subscribe(n => {
    let box = document.getElementById('2');
    box.innerHTML = n;
    console.log(n);
});

var mouseMove = Rx.Observable.fromEvent(document, "mousemove");
var text = "RxJs experiment";
var container = document.getElementById('container');

for(var i=0; i <text.length; i++){
    (function(i){
        var s = document.createElement("span");
        s.innerHTML = text.charAt(i);
        s.style.position = "absolute";
        container.appendChild(s);

        mouseMove.delay(i*100).subscribe(function(mouseEvent){
            s.style.top = mouseEvent.clientY + "px";
            s.style.left = mouseEvent.clientX + i * 10 + 15 + "px";
        });
    })(i);
}