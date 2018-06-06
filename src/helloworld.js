import Rx from 'rxjs/Rx';

const HELLOWORLD_ID = 'helloworld';
const HELLOWORLD_BOX_ID = 'helloworld-box'

const helloWorldTemplate = `
    <div class="example__title">
        RxJS Hello World
    </div>
    <div class="example__content">
        <div class="code">                    
            <pre class="prettyprint lang-js">
                <code >     
const obs = Rx.Observable.create(observer => {
    observer.next('Hello World');
});

obs.subscribe(result => {
    console.log(result);
}); 
                </code>
            </pre>                 
        </div>
        <div class="interaction">
            <h3>Observable Hello World</h3>
            <div class="w3-panel w3-card" id="${HELLOWORLD_BOX_ID}"></div>
        </div>
    </div>
`;

const renderHelloWorld = () => {
    const section = document.getElementById(HELLOWORLD_ID);
    section.innerHTML = helloWorldTemplate;
}

const subscribeHelloWorld = () => {
    const observable = Rx.Observable.create(observer => {
        observer.next('Hello World');
    });
    
    observable.subscribe(result => {
        const box = document.getElementById(HELLOWORLD_BOX_ID);
        box.innerHTML = result;
    });
}

const runHelloWorld = () => {
    renderHelloWorld();
    subscribeHelloWorld();
}

export {
    runHelloWorld
}