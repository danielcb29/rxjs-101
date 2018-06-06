import Rx from 'rxjs/Rx';

const runCallback = () => {

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
        .map(event => event.target.options[event.target.selectedIndex].value )
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
        .map(event => event.target.options[event.target.selectedIndex].value )
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

export {
    runCallback
}

