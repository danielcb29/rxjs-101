import Rx from 'rxjs/Rx';

const runCallback = () => {

    function getRandom() {
        let n = parseInt(Math.random() * 10);
        while( n>0 ){
            return n;
        }

    }

}

let getName = Rx.Observable.fromCallback(daniel.getName);

