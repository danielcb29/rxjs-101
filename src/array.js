import Rx from 'rxjs/Rx';

const runArrayExample = () => {
    // var customerName = prompt("Please enter your name", "<name goes here>");

    // if (customerName!= null) {

    // document.getElementById("box").innerHTML =

    // "Hello " + customerName + "! How are you today?";

    // }
    
    let btnRegister = document.getElementById('register');
    let btnShow = document.getElementById('show');

    let namesList = [];

    function insert(){
        let firstName = document.getElementById("fn").value;
        let lastName = document.getElementById("ln").value;
        let fullName = {
            firstName: firstName,
            lastName: lastName
        };
    
        namesList.push(fullName);
    }
    
    function show(){
        var list = Rx.Observable
        .interval(500)
        .take(namesList.length)
        .map(i => namesList[i]);

        list.subscribe(name => {
            let box = document.getElementById('box');
            box.innerHTML = name;
            console.log(name);
        });
    }

    var numbers = [1,2,3,4,5,6,7,8,9,10];
    // A stream
    var numbers$ = Rx.Observable
    .interval(500)
    .take(10)
    .map(i => numbers[i]);

    numbers$.subscribe(n => {
        let box = document.getElementById('array-box');
        box.innerHTML = n;
        console.log(n);
    });
}

export {
    runArrayExample
}