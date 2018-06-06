import Rx from "rxjs/Rx";

const runInput = () => {
  const input = document.getElementById("input-example");
  const inputObservable = Rx.Observable.fromEvent(input, "input");
  inputObservable
    .map(event => event.target)
    .map(target => {
        const value = target.value;
        const letters = value.length;
        return {
            value: value,
            letters: letters,
        }
    })
    .do(data => {
        data.value = data.value !== '' ? data.value : '-';
        data.letters = data.letters !== 0 ? data.letters : '-';
    })
    .subscribe(( { value, letters, timestamp } ) => {
        const resultInput = document.getElementById('input-result');
        const lettersInput = document.getElementById('number-letters');

        resultInput.innerHTML = value;
        lettersInput.innerHTML = letters;
        
    });
};

export { runInput };
