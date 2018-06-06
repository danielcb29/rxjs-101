import Rx from 'rxjs/Rx';

const runHelloWorld = () => {
    const observable = Rx.Observable.create(observer => {
        observer.next('Hello World');
    });
    
    observable.subscribe(result => {
        let box = document.getElementById('helloworld-box');
        box.innerHTML = result;
    }); 
}

export {
    runHelloWorld
}