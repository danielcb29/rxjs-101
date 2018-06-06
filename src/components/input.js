import render from './../utils/render'; 
import Rx from "rxjs/Rx";

const INPUTEVENT_ID = 'input-event';
const INPUT_ID = 'input-example';
const INPUTRESULT_ID = 'input-result';
const INPUTLENGTH_ID = 'input-length';

const inputTemplate = `
    <div class="example__title">
        RxJS from input event
    </div>
    <div class="example__content">
        <div class="code">                    
            <pre class="prettyprint lang-js">
                <code >
const inputObservable = Rx.Observable.fromEvent(input, "input");
inputObservable
    .map(({ target: { value, length } }) => ({
        value: !value ? '-' : value,
        length: length !== 0 ? length : '-'
    }))
    .subscribe(( { value, length } ) => {
        const resultContainer = document.getElementById(INPUTRESULT_ID);
        const lengthContainer = document.getElementById(INPUTLENGTH_ID);

        resultContainer.innerHTML = value;
        lengthContainer.innerHTML = length;
    });
                </code>
            </pre>                 
        </div>
        <div class="interaction">
            <h3>Observable of input event</h3>
            <input class="w3-input w3-border" type="text" placeholder="Text" name="text" id="${INPUT_ID}">
            <h4>Result</h4>
            <ul>
                <li class="result"><span class="result__title"><b>Input result:</b> <span id="${INPUTRESULT_ID}">-</span></span></li>
                <li class="result"><span class="result__title"><b>Number of letters:</b> <span id="${INPUTLENGTH_ID}">-</span></span></li>
            </ul>
        </div>
    </div>    
`

const subscribeInput = () => {
  const input = document.getElementById(INPUT_ID);
  const inputObservable = Rx.Observable.fromEvent(input, "input");
  inputObservable
    .map(({ target: { value } }) => ({
        value: !value ? '-' : value,
        length: value.length !== 0 ? value.length : '-'
    }))
    .subscribe(( { value, length } ) => {
        const resultContainer = document.getElementById(INPUTRESULT_ID);
        const lengthContainer = document.getElementById(INPUTLENGTH_ID);

        resultContainer.innerHTML = value;
        lengthContainer.innerHTML = length;
    });
};

const runInput = () => {
    render(INPUTEVENT_ID, inputTemplate);
    subscribeInput();
}

export { runInput };
