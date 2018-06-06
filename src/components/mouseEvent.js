import Rx from "rxjs/Rx";

const runMouseEvent = () => {
  const mouseMove = Rx.Observable.fromEvent(document, "mousemove");
  const text = "RxJs experiment";
  const container = document.getElementById("mouseEvent-container");

  for (let i = 0; i < text.length; i++) {
    (function(i) {
      let s = document.createElement("span");
      s.innerHTML = text.charAt(i);
      s.style.position = "absolute";
      s.style.color = "#191970";
      container.appendChild(s);

      mouseMove.delay(i * 100).subscribe(function(mouseEvent) {
        s.style.top = mouseEvent.clientY + "px";
        s.style.left = mouseEvent.clientX + i * 10 + 15 + "px";
      });
    })(i);
  }
};

export { runMouseEvent };
