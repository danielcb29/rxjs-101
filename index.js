var observable = Rx.Observable.create(observer => {
    observer.next('Hello World');
});


observable.subscribe(result => {
    let box = document.getElementById('box');
    box.innerHTML = result;
    console.log(result);
}); 