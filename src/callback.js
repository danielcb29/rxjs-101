import Rx from 'rxjs/Rx';

function Person(name) {
    let _name = name;

    this.getName = function() {
        return _name;
    }
}

let daniel = new Person('Daniel');

let getName = Rx.Observable.fromCallback(daniel.getName);

