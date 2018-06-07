import render from '../utils/render';
import Rx from 'rxjs/Rx';

const API_ID = 'api';

const apiTemplate = `
  <div class="example__title">
    RxJS from API request
  </div>
  <div class="example__content">
    <div class="code">                    
        <pre class="prettyprint lang-js">
            <code >
const requests$ = Rx.Observable
    .fromEvent(btnViewGenres, 'click')
    .map( _ => '...api link...');
const responses$ = requests$
    .flatMap(url => Rx.Observable.fromPromise(fetch(url)))
    .flatMap(r => Rx.Observable.fromPromise(r.json()));
const genres$ = responses$.map(response => response.genres);

genres$.subscribe(response => {
    response.forEach((genre) => {
    appendGenresToDOM(genre);
    });
});
            </code>
        </pre>                 
    </div>
    <div class="interaction">
        <button onClick="this.disabled=true;" class="w3-button w3-block w3-purple w3-round-large w3-hover-pink" style="width:100%" id="view-genres">View list of official genres for movies</button>
        <div class="w3-panel w3-card" id="genres-box"></div>
    </div>
  </div>

`;

const subscribeApi = () => {
    const btnViewGenres = document.getElementById('view-genres');
    const requests$ = Rx.Observable
            .fromEvent(btnViewGenres, 'click')
            .map( _ => 'https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US');
    const responses$ = requests$
            .flatMap(url => Rx.Observable.fromPromise(fetch(url)))
            .flatMap(r => Rx.Observable.fromPromise(r.json()));
    const genres$ = responses$.map(response => response.genres);

    genres$.subscribe(response => {
        response.forEach((genre) => {
            appendGenresToDOM(genre);
        });
    });

    const createContainer = name => {
      const p = document.createElement("p");
      p.textContent = name;
      p.style.color = "#de0790";
      return p;
    }

    const appendGenresToDOM = ({ name }) => {
      const p = createContainer(name);
      const box = document.getElementById('genres-box');
      box.appendChild(p);
    }
}

const runApiExample = () => {
  render(API_ID, apiTemplate);
  subscribeApi();
}

export {
    runApiExample
}