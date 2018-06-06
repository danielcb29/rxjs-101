import Rx from "rxjs/Rx";
import { timeInterval } from "rxjs/operator/timeInterval";

const runPromise = () => {
  const subscribeIt = count => {
    const promise = new Promise((resolve, reject) => {
      const random = parseInt(Math.random() * 10);
      if (random === 0) {
        reject(random);
      }
      resolve(random);
    });

    const observable = Rx.Observable.fromPromise(promise);
    const resultElement = document.getElementById('promise-result-element');
    const resultImg = document.getElementById('promise-img');
    observable.subscribe(
      response => {
          
        resultElement.innerHTML = `${response}: Resolved`;
        resultElement.style.color = 'green';
        resultImg.setAttribute('src', './assets/yeah.PNG');
      },
      error => {
        resultElement.innerHTML = `${error}: Rejected`;
        resultElement.style.color = 'red';
        resultImg.setAttribute('src', './assets/boo.jpg');
      }
    );
  };

  const resultContainer = document.getElementById("promise-result");
  const buttonSubscribe = document.getElementById("run-promise");
  Rx.Observable.fromEvent(buttonSubscribe, "click")
    .scan(count => count + 1, 0)
    .do(() => {
      resultContainer.style.display = "block";
      resultContainer.innerHTML = "Making magic...";
      resultContainer.style.color = '#9e018f';
    })
    .delay(500)
    .do(count => {
        resultContainer.innerHTML = '';
        const list = document.createElement('ul');
        list.style.listStyleType = 'none';

        const clickChild = document.createElement('li');
        clickChild.innerHTML = `You clicked ${count} times`;

        const gotChild = document.createElement('li');
        const spanGot = document.createElement('span');
        const youGotText = document.createTextNode('You got ');
        const spanResult = document.createElement('span');
        spanResult.id = 'promise-result-element';
        spanGot.appendChild(youGotText);
        spanGot.appendChild(spanResult);

        const img = document.createElement('img');
        img.id = 'promise-img';
        gotChild.appendChild(spanGot);
        [1,2].forEach(() => {
            const lineBreak = document.createElement('br');
            gotChild.appendChild(lineBreak);
        })
        gotChild.appendChild(img);
        [1,2].forEach(() => {
            const lineBreak = document.createElement('br');
            gotChild.appendChild(lineBreak);
        })
        
        list.appendChild(gotChild);
        list.appendChild(clickChild);
        resultContainer.appendChild(list);
    })
    .subscribe(count => {
      subscribeIt(count);
    });
};

export { runPromise };
