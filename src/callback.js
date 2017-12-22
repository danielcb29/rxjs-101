import Rx from 'rxjs/Rx';

const runCallback = () => {

    function Lunch() {

        let meal = null;

        this.selectMeal = (newMeal ,doLogic) => {
            meal = newMeal;
            // selectJuice(newMeal);
        }

        this.getMeal = () => {  
            return meal;
        }


    }

    // const someFunction = callback => callback(5, 's', {a: 'a'});

    // someFunction((a, b, c) => {
    //     console.log(a); // 5
    //     console.log(b); // 'some string'
    //     console.log(c); // {someProperty: 'someValue'}
    // });

    // const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
    // console.log(boundSomeFunction());
    // boundSomeFunction().subscribe(values => {
    //     console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
    // });

    const currentLunch = new Lunch();
    const selectMeal = Rx.Observable.bindCallback(currentLunch.selectMeal);
    let mealObservable = selectMeal();

    const mealSelector = document.getElementById('meal-selector')
    Rx.Observable.fromEvent(mealSelector, 'change')
        .map(event => event.target.options[event.target.selectedIndex].value )
        .subscribe(meal => {
            console.log(meal);
            currentLunch.selectMeal(meal);
            mealObservable = selectMeal(meal);

        })

    mealObservable.subscribe(meal => {
        console.log('in');
        console.log(meal);
    });
      
}

export {
    runCallback
}

