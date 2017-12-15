var observable = Rx.Observable.create(observer => {
    observer.next('Hello World');
});

observable.subscribe(result => {
    let box = document.getElementById('box');
    box.innerHTML = result;
    console.log(result);
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