import Rx from 'rxjs/Rx';

const runMouseEvent = () => {
    var mouseMove = Rx.Observable.fromEvent(document, "mousemove");
    var text = "RxJs experiment";
    var container = document.getElementById('mouseEvent-container');

    for(var i=0; i <text.length; i++){
        (function(i){
            var s = document.createElement("span");
            s.innerHTML = text.charAt(i);
            s.style.position = "absolute";
            s.style.color = "#191970";
            container.appendChild(s);

            mouseMove.delay(i*100).subscribe(function(mouseEvent){
                s.style.top = mouseEvent.clientY + "px";
                s.style.left = mouseEvent.clientX + i * 10 + 15 + "px";
            });
        })(i);
    }
}

export {
    runMouseEvent
}