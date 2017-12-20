import Rx from 'rxjs/Rx';

const runArrayExample = () => {
    let btnRegister = document.getElementById('register');
    let btnShow = document.getElementById('show');
    let namesList = [];
    
    let input = Rx.Observable.fromEvent(btnRegister, 'click');
    input.subscribe(response => {
        let firstName = document.getElementById("fn").value;
        let lastName = document.getElementById("ln").value;
        let fullName = {
            firstName: firstName,
            lastName: lastName
        };

        namesList.push(fullName);

        document.getElementById("fn").value = '';
        document.getElementById("ln").value = '';

        showList();
    });
    
    //let output = Rx.Observable.fromEvent(btnShow, 'click');
    function showList(){
       //output.subscribe(response => {
            var list = Rx.Observable
            .interval(500)
            .take(namesList.length)
            .map(i => namesList[i]);

            var box = document.getElementById('collection-box');
            box = removeAllChildrenFromNode(box);

            list.subscribe(name => {
                console.log(name);
                appendNamesToDOM(name, box);
            });
        //});
    }

    function toTemplate(name){
        var a = document.createElement("a");
        a.textContent = name.firstName + ' ' + name.lastName;
        a.style.color = "#de0790";
        var div = document.createElement("div");
        div.appendChild(a);
        return div;
    }

    function appendNamesToDOM(name, box){
        var t = toTemplate(name);
        box.appendChild(t);
    }

    function removeAllChildrenFromNode(node){
        var shell = node.cloneNode(false);
        if (node.parentNode) {
            node.parentNode.replaceChild(shell, node);
        }
        return shell;
    }
}

export {
    runArrayExample
}