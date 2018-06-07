import render from './../utils/render'; 
import Rx from 'rxjs/Rx';

const CALLBACK_ID = 'callback';

const callbackTemplate = `
  <div class="example__title">
    RxJS from Callback
  </div>
  <div class="example__content">
    <div class="code">                    
        <pre class="prettyprint lang-js">
            <code >
function appendFoodToMenu(type, food) {
    const span = document.getElementById(type + '-option');
    span.innerHTML = food;
}

function selectMeal(appendFunction){
    appendFunction('meal', meal);
}

function selectJuice(appendFunction){
    appendFunction('juice', juice);
}

const boundSelectMeal = Rx.Observable.bindCallback(selectMeal);
const boundSelectJuice = Rx.Observable.bindCallback(selectJuice);

Rx.Observable.fromEvent(mealSelector, 'change')
  .map(({ target: { options, selectedIndex } }) => options[selectedIndex].value )
  .subscribe(newMeal => {
      meal = newMeal;
      selectMeal(appendFoodToMenu);
      const mealObservable = boundSelectMeal();
      mealObservable
          .subscribe(data => {
              console.log('Callback binded to Obsevable', data);
          });
  });

            </code>
        </pre>                 
    </div>
    <div class="interaction">
        <h3>Observable binded by Callback</h3>
        <p>Select your lunch following next options</p>
        <div id="lunch-order">
            <h4>Your lunch order</h4>
            <ul id="lunch-list">
                <li class="result">Meal: <span id="meal-option">You didn't select a meal</span></li>
                <li class="result">Juice: <span id="juice-option">You didn't select a juice</span></li>
            </ul>
        </div>
        <div>
            <h4>Your lunch options</h4>
            <p>Step 1: Select your meal</p>
            <select class="w3-select w3-border" name="option" id="meal-selector">
                <option value="" disabled selected>Choose your meal option</option>
                <option value="Pork">Pork</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
            </select>
            <p>Step 2: Select your juice</p>
            <select class="w3-select w3-border" name="option" id="juice-selector">
                <option value="" disabled selected>Choose your juice option</option>
                <option value="Orange">Orange</option>
                <option value="Lulo">Lulo</option>
                <option value="Maracuyá">Maracuyá</option>
            </select>
        </div>
    </div>
  </div>
`;

const subscribeCallback = () => {
    let meal = null;
    let juice = null;
    function appendFoodToMenu(type, food) {
        const span = document.getElementById(`${type}-option`);
        span.innerHTML = food;
    }

    function selectMeal(appendFunction){
        appendFunction('meal', meal);
    }

    function selectJuice(appendFunction){
        appendFunction('juice', juice);
    }
    
    const boundSelectMeal = Rx.Observable.bindCallback(selectMeal);
    const boundSelectJuice = Rx.Observable.bindCallback(selectJuice);

    const mealSelector = document.getElementById('meal-selector');
    const juiceSelector = document.getElementById('juice-selector');

    Rx.Observable.fromEvent(mealSelector, 'change')
        .map(({ target: { options, selectedIndex } }) => options[selectedIndex].value )
        .subscribe(newMeal => {
            meal = newMeal;
            selectMeal(appendFoodToMenu);
            const mealObservable = boundSelectMeal();
            mealObservable
                .subscribe(data => {
                    console.log('Callback binded to Obsevable', data);
                });
        });

    Rx.Observable.fromEvent(juiceSelector, 'change')
        .map(({ target: { options, selectedIndex } }) => options[selectedIndex].value )
        .subscribe(newJuice => {
            juice = newJuice;
            selectJuice(appendFoodToMenu);
            const juiceObservable = boundSelectJuice();
            juiceObservable
                .subscribe(data => {
                    console.log('Callback binded to Obsevable');
                });
        });
}

const runCallback = () => {
  render(CALLBACK_ID, callbackTemplate);
  subscribeCallback();
}

export {
    runCallback
}

