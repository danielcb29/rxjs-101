import Rx from "rxjs/Rx";

const runInput = () => {
  const input = document.getElementById("input-example");
  const inputObservable = Rx.Observable.fromEvent(input, "input");
  console.log("hey");
  inputObservable
    .map(event => {
      return {
        target: event.target,
        timestamp: event.timeStamp
      };
    })
    .map(({ target , timestamp }) => {
        const value = target.value;
        const letters = value.length;
        return {
            value: value,
            letters: letters,
            timestamp: timestamp
        }
    })
    .do(data => {
        data.value = data.value !== '' ? data.value : '-';
        data.letters = data.letters !== 0 ? data.letters : '-';
    })
    .subscribe(( { value, letters, timestamp } ) => {
        const resultInput = document.getElementById('input-result');
        const lettersInput = document.getElementById('number-letters');
        const timestampInput = document.getElementById('timestamp');

        resultInput.innerHTML = value;
        lettersInput.innerHTML = letters;
        timestampInput.innerHTML = timestamp;
        
    });
};

export { runInput };
