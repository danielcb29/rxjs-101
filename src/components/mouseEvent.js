import render from './../utils/render'; 
import Rx from "rxjs/Rx";

const MOUSEEVENT_ID = 'mouseevent';
const MOUSECONTAINER_ID = 'mouse-container';

const mouseEventTemplate = `
  <div class="example__title">
    RxJS from mouse event
  </div>
  <div class="example__content">
    <div class="code">                    
        <pre class="prettyprint lang-js">
            <code >
const text = "RxJs Mouse Move";
const mouseMove = Rx.Observable.fromEvent(document, "mousemove");
text.split('').forEach((char, index) => {
  const span = document.createElement("span");
  span.innerHTML = char;
  span.style.position = "absolute";
  span.style.color = "#191970";
  container.appendChild(span);
  mouseMove.delay(index * 100).subscribe(({ clientY, clientX }) => {
    span.style.top = clientY + 'px';
    span.style.left = clientX + index * 10 + 15 + 'px';
  });
});
            </code>
        </pre>                 
    </div>
    <div id="${MOUSECONTAINER_ID}"></div>
  </div>

`;

const subscribeMouseEvent = () => {
  const container = document.getElementById(MOUSECONTAINER_ID);
  const text = "RxJs Mouse Move";
  const mouseMove = Rx.Observable.fromEvent(document, "mousemove");

  text.split('').forEach((char, index) => {
    const span = document.createElement("span");
    span.innerHTML = char;
    span.style.position = "absolute";
    span.style.color = "#191970";
    container.appendChild(span);
    mouseMove.delay(index * 100).subscribe(({ clientY, clientX }) => {
      span.style.top = `${clientY}px`;
      span.style.left = `${clientX + index * 10 + 15}px`;
    });
  });
};

const runMouseEvent = () => {
  render(MOUSEEVENT_ID, mouseEventTemplate);
  subscribeMouseEvent();
}

export { runMouseEvent };
