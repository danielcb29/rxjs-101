import Rx from 'rxjs/Rx';

const runApiExample = () => {
    let btnViewGenres = document.getElementById('view-genres');

    let requests$ = Rx.Observable
            .fromEvent(btnViewGenres, 'click')
            .map( _ => 'https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US');
            //.startWith('https://api.themoviedb.org/3/genre/movie/list?api_key=76f6b14f3a0fd2ed9f79af9b6db27612&language=en-US');

    let responses$ = requests$
            .flatMap(url => Rx.Observable.fromPromise(fetch(url)))
            .flatMap(r => Rx.Observable.fromPromise(r.json()));

    let genres$ = responses$.map(getGenres);

    genres$.subscribe(response => {
        response.forEach((genre) => {
            appendGenresToDOM(genre);
        });
    });

    function getGenres(res){
        return res.genres;
    }

    function toTemplate(genre){
        var a = document.createElement("a");
        a.textContent = genre.name;
        a.style.color = "#de0790";
        var div = document.createElement("div");
        div.appendChild(a);
        return div;
    }

    function appendGenresToDOM(genre){
        var t = toTemplate(genre);
        var g = document.getElementById('genres-box');
        g.appendChild(t);
    }
}

export {
    runApiExample
}