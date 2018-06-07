import render from './../utils/render'; 
import Rx from "rxjs/Rx";
import { timeInterval } from "rxjs/operator/timeInterval";

const PROMISE_ID = 'promise';

const promiseTemplate = `
  <div class="example__title">
    RxJS from basic Promise
  </div>
  <div class="example__content">
    <div class="code">
      <pre class="prettyprint lang-js">
        <code>
const promise = new Promise((resolve, reject) => {
  const random = parseInt(Math.random() * 10);
  if (random === 0) {
    reject(random);
  }
  resolve(random);
});
const observable = Rx.Observable.fromPromise(promise);
observable.subscribe(
  response => {
    resultElement.innerHTML = response + ': Resolved';
    resultElement.style.color = 'green';
    resultImg.setAttribute('src', './assets/yeah.PNG');
  },
  error => {
    resultElement.innerHTML = error + ': Rejected';
    resultElement.style.color = 'red';
    resultImg.setAttribute('src', './assets/boo.jpg');
  }
);
        </code>
      </pre>
    </div>
    <div class="interaction">
      <h3>Observable of random number promise!</h3>
      <p>Click on the button and see if you got a nice number :) (> 0)</p>
      <div class="w3-center">
        <img src="./assets/showMeWhatYouGot.jpg" /> <br/> <br/>
        <button class="w3-btn w3-brown w3-round-large" id="run-promise">Show me what you got!</button><p></p>    
        <div class="w3-panel w3-card" id="promise-result" style="display: none">
          <ul>
            <li class="result"><span class="result__title">You got!!</span> </li>
            <li class="result"><span class="result__title">You clicked: times</span> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`;

const subscribePromise = () => {
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

const runPromise = () => {
  render(PROMISE_ID, promiseTemplate);
  subscribePromise();
}

export { runPromise };
